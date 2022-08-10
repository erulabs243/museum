'use strict';

import { UserAddIcon } from '@heroicons/react/solid';

const OverviewStat = () => {
    return (
        <div className="w-32 bg-gray-50 rounded-2xl p-7 text-gray-700">
            <UserAddIcon className="w-8 h-8 mx-auto bg-red-500 rounded-full" />
            <h1>Stat</h1>
        </div>
    );
};

export default OverviewStat;
