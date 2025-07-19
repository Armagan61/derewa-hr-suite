import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Mitarbeiterübersicht</h1>
    <ul>
      <li><Link to="/employee/1" className="text-blue-500">Max Mustermann – Projektleiter</Link></li>
      <li><Link to="/employee/2" className="text-blue-500">Anna Schmidt – Innendienst</Link></li>
    </ul>
  </div>
);

export default Dashboard;