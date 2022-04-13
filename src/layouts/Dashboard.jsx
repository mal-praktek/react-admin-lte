import '../assets/css/adminlte.min.css'

import AppHeader from "../component/AppHeader";
import AppSidebar from "../component/AppSidebar";
import AppFooter from "../component/AppFooter";

const Dashboard = () => {
    return (
        <div className="wrapper">
            <AppHeader/>
            <AppSidebar/>
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid pt-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card card-primary card-outline">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the
                                            card's
                                            content.
                                        </p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>

                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </div>
    );
};

export default Dashboard;
