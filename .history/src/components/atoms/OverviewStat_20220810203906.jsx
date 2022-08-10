'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="w-32 bg-gray-50 rounded-xl p-7 text-gray-700">
            <UserAddIcon className="w-7 h-7 mx-auto" />
            <h1 className="text-center font-bold text-2xl pt-3">254</h1>
            <span className="text-center text-xs w-full">Visiteurs</span>
        </div>
    );
};

export default OverviewStat;
