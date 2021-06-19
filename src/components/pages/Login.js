import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import css from './login.module.css';
// import { useEffect } from "react"
import { login } from '../services/Auth';
import { withNoAuth } from '../HOC/withNoAuth';

function Login(props) {
  const { register, handleSubmit } = useForm();

  //   useEffect (() => {
  //     if (localStorage.getItem("user-info")){
  //         history.push("/Dashboard")
  //     }

  // })
  const history = useHistory();
  const onSubmit = async (data) => {
    const loggedin = await login(data);
    localStorage.setItem('Token', JSON.stringify(loggedin.token));
    history.replace('/');
  };

  return (
    <section className="container-fluid">
      <section className={classNames('form', css.row)}>
        <section className="col-12 col-sm-6 col-md-3">
          <form className={classNames('form', css.formContainer)} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register('email', { required: true })}
                defaultValue="eve.holt@reqres.in"
              />
              <div id="emailHelp" className="form-text">'ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Last Name"
                {...register('password', { required: true })}
                defaultValue="cityslicka"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default withNoAuth(Login);
