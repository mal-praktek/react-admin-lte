import '../assets/css/adminlte.min.css'

import {useEffect} from "react";
import { Link } from "react-router-dom";
import {LockOutlined, MailOutlined} from "@ant-design/icons";

const Login = () => {
    useEffect(() => {
        document.body.className = 'login-page';
    },[])
    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <a href="#" className="h1"><b>Admin</b>LTE</a>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="#" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <MailOutlined/>
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <LockOutlined/>
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-4 offset-8">
                                <Link to='/'>
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
