import React from 'react';
import { useHistory } from 'react-router-dom';
import { profileProtect } from '../HOC/profileProtect';
import Header from '../container/header';
import { logOut } from '../services/Auth';
import Navigation from '../Navigation/Navigation';

// import { useSelector } from "react-redux"

const Home = (props) => {
  // const user = useSelector(selectUser)
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
    history.replace('/Login');
  };

  return (
    <div>

      <button
        className="btn btn-primary mt-4"
        onClick={onLogOut}
      >
        Logout
      </button>
      <Header />
    </div>
  );
};

export default profileProtect(Home);
