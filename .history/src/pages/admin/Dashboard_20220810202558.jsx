'use strict';

import { OverviewStat } from '../../components/atoms';
import { AdminSidebar } from '../../components/sections';

const Dashboard = () => {
    return (
        <main className="bg-gray-300 flex flex-row">
            <AdminSidebar />

            {/* OVERVIEW */}
            <section>
                {[...Array(3)].map((elt, idx) => (
                    <OverviewStat key={idx} />
                ))}
            </section>
        </main>
    );
};

export default Dashboard;
