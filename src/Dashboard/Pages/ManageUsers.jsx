import React from 'react';
import {
    Users,
    ShieldCheck,
    UserPlus,
    Trash2,
    Mail,
    Calendar,
    UserCog,
    Search,
    Filter,
    MoreVertical
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const AxiosSecure = useAxiosSecure();

    // Fetch users from backend
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/users');
            return res.data;
        }
    });

    const handleRoleChange = async (user) => {
        const newRole = user.role === 'admin' ? 'user' : 'admin';

        Swal.fire({
            title: `Make ${user.name} an ${newRole}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#ea580c',
            confirmButtonText: 'Yes, update role'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await AxiosSecure.patch(`/users/role/${user._id}`, { role: newRole });
                    refetch();
                    Swal.fire('Updated!', 'User role has been changed.', 'success');
                } catch (error) {
                    Swal.fire('Error', 'Could not update role', 'error');
                }
            }
        });
    };

    const handleDeleteUser = async (id) => {
        Swal.fire({
            title: 'Delete user?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#be123c',
            confirmButtonText: 'Yes, delete'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await AxiosSecure.delete(`/users/${id}`);
                    refetch();
                    Swal.fire('Deleted!', 'User has been removed.', 'success');
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };

    if (isLoading) return <LoadingPage />;

    return (
        <div className="p-6 md:p-10 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                        User Directory
                    </h1>
                    <p className="text-slate-500 text-sm font-medium">Manage permissions and oversee all registered accounts.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-11 pr-6 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-orange-600/10 outline-none w-64 font-medium"
                        />
                    </div>
                    <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* User Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                        <Users size={28} />
                    </div>
                    <div>
                        <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Total Users</p>
                        <p className="text-2xl font-black text-slate-900">{users.length}</p>
                    </div>
                </div>
                {/* Additional stats could go here */}
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Identity</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Role</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Joined Date</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
                                                <img
                                                    src={user.image.startsWith('http') ? user.image : `https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-900">{user.name}</p>
                                                <div className="flex items-center gap-1.5 text-slate-500">
                                                    <Mail size={12} />
                                                    <p className="text-[11px] font-bold">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <button
                                            onClick={() => handleRoleChange(user)}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all
                                                ${user.role === 'admin'
                                                    ? 'bg-orange-50 text-orange-600 ring-1 ring-orange-200'
                                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                        >
                                            {user.role === 'admin' ? <ShieldCheck size={14} /> : <UserCog size={14} />}
                                            {user.role}
                                        </button>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Calendar size={14} />
                                            <span className="text-[11px] font-bold">
                                                {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-2 group-hover:opacity-100 transition-all">
                                            <button
                                                onClick={() => handleDeleteUser(user._id)}
                                                className="p-2.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-xl transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;