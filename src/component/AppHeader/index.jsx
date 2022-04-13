import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {MenuOutlined} from "@ant-design/icons";
import userImg from "../../assets/img/avatar4.png";

const Index = () => {
    const [IsOpen, setIsOpen] = useState(true)
    const [ShowDropdown, setShowDropdown] = useState(false)
    const toggleDropdown = () => setShowDropdown(!ShowDropdown)
    const toggleOpen = () => setIsOpen(!IsOpen)
    useEffect(() => {
        document.body.className = IsOpen
            ? 'sidebar-mini layout-navbar-fixed layout-fixed'
            : 'sidebar-mini layout-navbar-fixed layout-fixed sidebar-collapse';
    },[IsOpen])

    return (
        <nav className="main-header navbar navbar-expand navbar-primary navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={toggleOpen}>
                        <MenuOutlined/>
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className={`nav-item dropdown user-menu ${ShowDropdown ? 'show' : ''}`} onClick={toggleDropdown}>
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src={userImg} className="user-image img-circle elevation-2"
                             alt="User Image"/>
                            <span className="d-none d-md-inline">Alexander Pierce</span>
                    </a>
                    <ul className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${ShowDropdown ? 'show' : ''}`}>
                        <li className="user-header bg-primary">
                            <img src={userImg} className="img-circle elevation-2"
                                 alt="User Image"/>
                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                        </li>
                        <li className="user-footer">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                            <Link to='/login'>
                                <button className="btn btn-default btn-flat float-right">Sign out</button>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Index;
