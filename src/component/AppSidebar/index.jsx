import logo from "../../assets/img/AdminLTELogo.png";
import userImg from "../../assets/img/avatar4.png";
import {SearchOutlined, DashboardOutlined, CaretDownOutlined, CaretRightOutlined} from "@ant-design/icons";

const Index = () => {
    return (
        <aside className="main-sidebar sidebar-light-primary elevation-4 vh-100">
            <a href="#" className="brand-link">
                <img src={logo} alt="AdminLTE Logo"
                     className="brand-image img-circle elevation-3"/>
                <span className="brand-text font-weight-light">MyApp</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={userImg} className="img-circle elevation-2" alt="Sidebar"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <SearchOutlined/>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" role="menu"
                        data-accordion="false">
                        <li className="nav-item menu-open">
                            <a href="#" className="nav-link active">
                                <DashboardOutlined className="nav-icon"/>
                                <p>
                                    Starter Pages
                                    <CaretDownOutlined className="right"/>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">
                                        <CaretRightOutlined className="nav-icon"/>
                                        <p>Active Page</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <CaretRightOutlined className="nav-icon"/>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <DashboardOutlined className="nav-icon"/>
                                <p>
                                    Simple Link
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Index;
