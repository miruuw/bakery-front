import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                data-toggle="dropdown"
              >
                My Account
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="/signin" className="dropdown-item">
                  Sign in
                </Link>
                <Link to="/register" className="dropdown-item">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
