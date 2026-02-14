import React from 'react';
import {
    Users,
    Trash2,
    Mail,
    Calendar,
    Search,
    Filter,
    MoreVertical,
    UserCog
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingPage from '../../Components/Loading/LoadingPage';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const AxiosSecure = useAxiosSecure();

    // Fetch users data
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/users');
            return res.data;
        }
    });

    // Function to handle role update via selector
    const handleRoleUpdate = async (user, newRole) => {
        // Avoid unnecessary API calls if the role hasn't changed
        if (user.role === newRole) return;

        Swal.fire({
            title: 'Change User Role?',
            text: `Are you sure you want to promote/demote ${user.name} to ${newRole}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#ea580c',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await AxiosSecure.patch(`/users/${user._id}`, { role: newRole });
                    
                    if (res.data.modifiedCount) {
                        
                        
                          Swal.fire({
                              title: 'Updated!',
                              text: 'User role has been successfully updated.',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false
                          });
                          refetch(); 
                    }
                } catch (error) {
                    Swal.fire('Error', 'Failed to update the user role.', 'error');
                    refetch(); // Reset UI state on error
                }
            } else {
                refetch(); // Revert selector state if cancelled
            }
        });
    };

    const handleDeleteUser = async (id) => {
        Swal.fire({
            title: 'Delete User?',
            text: "This action is permanent and cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#be123c',
            confirmButtonText: 'Yes, delete user'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                   const res = await AxiosSecure.delete(`/users/${id}`);
                    refetch();
                    Swal.fire('Deleted!', 'The user has been removed from the database.', 'success');
                } catch (error) {
                    console.error('Delete error:', error);
                    Swal.fire('Error', 'Could not delete the user.', 'error');
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
                    <p className="text-slate-500 text-sm font-medium">Manage user permissions and monitor account activity.</p>
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

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                        <Users size={28} />
                    </div>
                    <div>
                        <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Total Registered</p>
                        <p className="text-2xl font-black text-slate-900">{users.length} Users</p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Identity</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Access Level</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Date Joined</th>
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
                                                    src={user.image?.startsWith('http') ? user.image : `https://ui-avatars.com/api/?name=${user.name}&background=random`}
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
                                        {/* Role Selector Dropdown */}
                                        <div className="relative inline-block w-32">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleUpdate(user, e.target.value)}
                                                className={`appearance-none w-full px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-tighter border-none focus:ring-2 focus:ring-orange-600/20 cursor-pointer outline-none transition-all
                                                ${user.role === 'admin'
                                                        ? 'bg-orange-50 text-orange-600'
                                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                            >
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                                <UserCog size={14} />
                                            </div>
                                        </div>
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
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleDeleteUser(user._id)}
                                                className="p-2.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                                                title="Delete User"
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