'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="w-32 h-32 bg-gray-50 rounded-2xl p-7 text-gray-700">
            <UserAddIcon className="w-7 h-7 text-center bg-red-50" />
            <h1>Stat</h1>
        </div>
    );
};

export default OverviewStat;
