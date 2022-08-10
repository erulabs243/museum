'use strict';

import { OverviewStat } from '../../components/atoms';
import { AdminSidebar } from '../../components/sections';

const Dashboard = () => {
    return (
        <main className="bg-gray-300 flex flex-row">
            <AdminSidebar />

            <aside className="flex flex-row w-full">
                <div className="w-60"></div>
                <div className="w-full">
                    {/* OVERVIEW */}
                    <section className="flex flex-row justify-around">
                        {[...Array(4)].map((elt, idx) => (
                            <OverviewStat key={idx} />
                        ))}
                    </section>
                </div>
            </aside>
        </main>
    );
};

export default Dashboard;
