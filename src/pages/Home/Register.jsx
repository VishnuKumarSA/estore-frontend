import React, { useState } from 'react'
import { authAPI } from '../../services.js/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/layout/Loader';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [loding, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleInputChanges = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            const msg = 'password and confirm password not matched ';
            setError(msg);
            return false;
        }
        setLoading(true);
        try {
            const apiData = await authAPI(formData, "register");            
            if (apiData.status === 201) {
                setLoading(false);                
                navigate('/login');
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    return (
        <div>
            <main className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-md w-full">
                    {loding ? (
                        <Loader />
                    ) : (
                        <div
                            className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-6 dark:bg-neutral-800 dark:border-neutral-700">
                            <h1 className="text-slate-900 text-center text-2xl font-bold dark:text-slate-50">Create an account</h1>

                            <form onSubmit={onSubmit} className="space-y-6 mt-10">
                                <div>
                                    <label htmlFor="name"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" onChange={handleInputChanges} />
                                </div>
                                <div>
                                    <label htmlFor="email"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" onChange={handleInputChanges} />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                                    <input type="password" id="password" name="password" placeholder="••••••••" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" onChange={handleInputChanges} />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                                        password</label>
                                    <input type="password" id="confirm_password" name="confirm_password" placeholder="••••••••" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" onChange={handleInputChanges} />
                                    <p className='m-2 text-red-500'> {error ? error : ''}</p>
                                </div>

                                <div className="flex items-start flex-wrap gap-2">
                                </div>

                                <button type="submit"
                                    className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    Create an account</button>
                            </form>

                            <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account? <Link to="login"
                                className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                Login here</Link>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    )
}

export default Register
