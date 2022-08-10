'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="w-32 bg-gray-50 rounded-2xl p-7 text-gray-700">
            <UserAddIcon className="w-1/2 h-1/2 mx-auto p-1 bg-red-500 rounded-full" />
            <h1>Stat</h1>
        </div>
    );
};

export default OverviewStat;
