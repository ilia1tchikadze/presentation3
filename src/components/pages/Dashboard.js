import React, { useContext } from 'react';
import { UserContext } from '../../context/TaskListContext';

function Dashboard() {
  const msg = useContext(UserContext);
  // throw SyntaxError = "something went wrong"
  return (
    <div>
      {msg}
    </div>
  );
}

export default Dashboard;
