import React, { useState } from 'react';
import {
    CreditCard,
    Banknote,
    ShieldCheck,
    ArrowLeft,
    Info,
    ArrowUpCircle,
    ArrowDownCircle,
    Landmark
} from 'lucide-react';
import { useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManualPayment = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [paymentMethod, setPaymentMethod] = useState('card');

    // Form State
    const [formData, setFormData] = useState({
        productName: '',
        type: 'income', // Default type
        cardNumber: '',
        expiry: '',
        cvc: '',
        senderBankName: '',
        senderAccountName: '',
        transactionId: '',
        receipt: null,
        name: user?.displayName || '',
        email: user?.email || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = {
            method: paymentMethod,
            productName: formData.productName,
            type: formData.type,
            status: "Pending",
            name: user?.displayName,
            email: user?.email,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }),
            ...(paymentMethod === 'card' ? {
                cardNumber: formData.cardNumber,
                expiry: formData.expiry,
                cvc: formData.cvc,
            } : {
                senderBankName: formData.senderBankName,
                senderAccountName: formData.senderAccountName,
                transactionId: formData.transactionId,
                receiptName: formData.receipt?.name || 'N/A',
            })
        };

        try {
            const res = await axiosSecure.post("/payment", submissionData);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment submitted for review!',
                    text: 'Your transaction is currently pending approval.',
                    showConfirmButton: false,
                    timer: 2000
                });
              
            }
        } catch (error) {
            console.error("Payment Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Please check your details and try again.'
            });
        }
    };

    return (
        <div className="p-6 md:p-10 bg-[#FDFDFD] min-h-screen font-sans">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center cursor-pointer gap-2 text-slate-500 font-bold text-sm hover:text-slate-900 transition-all mb-4"
                >
                    <ArrowLeft size={16} /> Go Back
                </button>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Checkout</h1>
                <p className="text-slate-500 mt-2 font-medium">Please provide your payment details below.</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="lg:col-span-2 space-y-6">

                    {/* Step 1: Method Selection */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            Payment Method
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setPaymentMethod('card')}
                                className={`p-6 rounded-3xl border-2 transition-all flex flex-col gap-3 items-start ${paymentMethod === 'card' ? 'border-orange-600 bg-orange-50/30' : 'border-slate-50 bg-slate-50/50'}`}
                            >
                                <CreditCard className={paymentMethod === 'card' ? 'text-orange-600' : 'text-slate-400'} />
                                <span className="font-black text-sm">Credit Card</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setPaymentMethod('bank')}
                                className={`p-6 rounded-3xl border-2 transition-all flex flex-col gap-3 items-start ${paymentMethod === 'bank' ? 'border-orange-600 bg-orange-50/30' : 'border-slate-50 bg-slate-50/50'}`}
                            >
                                <Landmark className={paymentMethod === 'bank' ? 'text-orange-600' : 'text-slate-400'} />
                                <span className="font-black text-sm">Bank Transfer</span>
                            </button>
                        </div>
                    </div>

                    {/* Step 2: Transaction Type (Income vs Expense) */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            Transaction Type
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
                                className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 ${formData.type === 'income' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-50 bg-slate-50/50 text-slate-400'}`}
                            >
                                <ArrowUpCircle size={20} />
                                <span className="font-black text-sm uppercase tracking-tighter">Income</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
                                className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 ${formData.type === 'expense' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-slate-50 bg-slate-50/50 text-slate-400'}`}
                            >
                                <ArrowDownCircle size={20} />
                                <span className="font-black text-sm uppercase tracking-tighter">Expense</span>
                            </button>
                        </div>
                    </div>

                    {/* Step 3: Specific Details */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            Payment Details
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">Purpose of Payment</label>
                                <input
                                    name="productName"
                                    required
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="e.g. Monthly Subscription"
                                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm"
                                />
                            </div>

                            {paymentMethod === 'card' ? (
                                <div className="space-y-4 pt-2">
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">Card Number</label>
                                        <input
                                            name="cardNumber"
                                            required={paymentMethod === 'card'}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input name="expiry" required={paymentMethod === 'card'} onChange={handleInputChange} type="text" placeholder="MM/YY" className="px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm" />
                                        <input name="cvc" required={paymentMethod === 'card'} onChange={handleInputChange} type="text" placeholder="CVC" className="px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm" />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 pt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">Your Bank Name</label>
                                            <input name="senderBankName" required={paymentMethod === 'bank'} onChange={handleInputChange} type="text" placeholder="e.g. Chase Bank" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">Account Name</label>
                                            <input name="senderAccountName" required={paymentMethod === 'bank'} onChange={handleInputChange} type="text" placeholder="Full Name on Account" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-4 mb-2 block tracking-widest">Transaction / Ref ID</label>
                                        <input name="transactionId" required={paymentMethod === 'bank'} onChange={handleInputChange} type="text" placeholder="Paste Transaction ID here" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-600/20 font-medium text-sm" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar Summary */}
                <div className="space-y-6">
                    <div className="bg-[#111827] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-900/20">
                        <h3 className="text-xl font-black mb-6 tracking-tight">Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400 font-medium">Subtotal</span>
                                <span className="font-bold">$1,299.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400 font-medium">Service Fee</span>
                                <span className="font-bold">$5.00</span>
                            </div>
                            <div className="h-px bg-slate-800 my-4"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Total Pay</span>
                                <span className="text-3xl font-black text-orange-500 tracking-tighter">$1,304.00</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-10 bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-600/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 text-sm"
                        >
                            Complete Payment
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                            <ShieldCheck size={14} className="text-emerald-500" /> 256-bit Secure
                        </div>
                    </div>

                    {/* Information Box */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-4 shadow-sm">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-fit">
                            <Info size={20} />
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                            <strong>Note:</strong> Transaction approvals usually take 1-2 hours. Please ensure your Transaction ID is correct.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ManualPayment;