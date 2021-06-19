import { Redirect } from 'react-router-dom';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem('Token'));
    if (token) {
      return <Redirect to="/Home" />;
    }

    return <Component {...props} />;
  };

  return WithNoAuth;
};


export default withNoAuth