'use strict';

import { HomeIcon, LogoutIcon } from '@heroicons/react/outline';

const AdminSidebar = () => {
    return (
        <div className="flex flex-col h-screen p-3 w-60 bg-red-500 text-gray-50">
            <div className="space-y-2">
                <h2 className="text-xs font-semibold tracking-wide uppercase dark:text-gray-700">
                    Tableau de bord
                </h2>
                <div className="flex flex-col space-y-1">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex flex-row items-center py-3 px-5 rounded-lg hover:bg-gray-700">
                        <HomeIcon className="w-5 h-5 mr-1" />
                        <span>Tableau de bord</span>
                    </a>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xs font-semibold tracking-wide uppercase dark:text-gray-700">
                    CMS
                </h2>
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#">
                        Header
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Drawer
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Page Title
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Menus
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Sidebar
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Footer
                    </a>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                    Pages
                </h2>
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#">
                        Homepage
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Users
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Tools
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        Settings
                    </a>
                </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end absolute bottom-4">
                <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="w-12 h-12 rounded-lg bg-gray-500"
                />
                <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-xs hover:underline text-gray-700">
                            View profile
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
