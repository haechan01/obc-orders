import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { firebaseAuth, logInWithEmailAndPassword } from '../../models/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(firebaseAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/main');
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
                  <h1 className="text-3xl text-slate-800 font-bold mb-6">
                    Login to your account
                  </h1>
                  <div className="space-y-4">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email Address
                        </label>

                        <input
                          id="username"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          // placeholder="Email address"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="password"
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
                          // placeholder="Password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="mr-1">
                        <Link
                          className="text-sm underline hover:no-underline"
                          to="/reset"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="rounded-md text-white ml-3 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() =>
                          logInWithEmailAndPassword(email, password)
                        }
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Login
                      </button>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="pt-5 mt-6 border-t border-slate-200">
                    <div className="text-sm">
                      Don’t you have an account?{' '}
                      <Link
                        className="font-medium text-indigo-500 hover:text-indigo-600"
                        to="/register"
                      >
                        Sign Up
                      </Link>
                    </div>
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
export default Login;
