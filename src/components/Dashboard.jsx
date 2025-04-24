import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>
      {Object.entries(categories).map(([name, widgets]) => (
        <Category key={name} name={name} widgets={widgets} />
      ))}
    </div>
  );
};

export default Dashboard;
