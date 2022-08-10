'use strict';

import { Navbar, Footer } from '../../components/sections';

const Login = () => {
    return (
        <main>
            <Navbar />

            <div className="flex flex-col mx-auto max-w-lg p-6 py-96 rounded-md bg-gray-50 text-gray-700">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-500">Sign in to access your account</p>
                </div>
                <form
                    noValidate=""
                    action=""
                    className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-50 text-gray-700"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs hover:underline text-gray-400">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-50 text-gray-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-red-500 text-gray-700">
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </main>
    );
};

export default Login;
