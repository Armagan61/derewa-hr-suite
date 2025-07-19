import React from 'react';
import { useParams } from 'react-router-dom';

const Employee = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl">Mitarbeiterprofil #{id}</h2>
      <p>Hier folgen Checklisten, Dokumente und Feedbackfelder…</p>
    </div>
  );
};

export default Employee;