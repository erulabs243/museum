'use strict';

import { OverviewStat } from '../../components/atoms';
import { AdminSidebar } from '../../components/sections';

const Dashboard = () => {
    return (
        <main className="bg-gray-300 flex flex-row">
            <AdminSidebar />

            <aside className="flex flex-row">
                <div className="w-60"></div>
                <div>
                    {/* OVERVIEW */}
                    <section className="flex flex-row justify-between w-full">
                        {[...Array(3)].map((elt, idx) => (
                            <OverviewStat key={idx} />
                        ))}
                    </section>
                </div>
            </aside>
        </main>
    );
};

export default Dashboard;
