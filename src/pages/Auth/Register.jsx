import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  firebaseAuth,
  registerWithEmailAndPassword,
} from '../../models/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(firebaseAuth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main', { replace: true });
  }, [user, loading]);

  return (
    <div className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div className="max-w-sm mx-auto px-4 py-8">
                  <h2 className="text-3xl text-slate-800 font-bold mb-6">
                    Create your Account
                  </h2>
                </div>
                <div className="space-y-4">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="user-name"
                        name="userName"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium mb-1 pt-2"
                      >
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-1 pt-2"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={register}
                    >
                      Register
                    </button>
                  </div>
                </div>
                {/* Footer */}
                <div className="pt-5 mt-6 border-t border-slate-200">
                  <div className="text-sm">
                    Have an account?{' '}
                    <Link
                      className="font-medium text-indigo-500 hover:text-indigo-600"
                      to="/"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={
              'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000'
            }
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
