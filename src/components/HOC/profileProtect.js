import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const profileProtect = (Component) => {
  const ProfileProtect = (props) => {
    useEffect(() => {
      console.log('accessing');
    }, []);

    const token = JSON.parse(localStorage.getItem('Token'));
    if (!token) {
      return <Redirect to="/Login" />;
    }

    return <Component {...props} />;
  };

  return ProfileProtect;
};

export default profileProtect
