'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="flex flex-col items-center w-48 bg-gray-50 rounded-xl p-12 text-gray-700">
            <UserAddIcon className="w-7 h-7" />
            <h1 className="font-bold text-2xl pt-3">254</h1>
            <span className="-mt-1 text-sm">Visiteurs</span>
        </div>
    );
};

export default OverviewStat;
