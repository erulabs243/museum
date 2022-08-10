'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="w-32 bg-gray-50 rounded-xl p-7 text-gray-700">
            <UserAddIcon className="w-8 h-8 mx-auto" />
            <h1 className="text-center font-bold text-2xl py-3">Stat</h1>
        </div>
    );
};

export default OverviewStat;
