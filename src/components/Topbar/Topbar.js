import './Topbar.css';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

function Topbar() {

  const { user } = useContext(AuthContext);

  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Загоре 3, Раднево, България</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Понеделник - Събота : 09.00 - 21.00</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            {user.isAuthenticated &&
              <>
                <small className="fa fa-user-alt text-primary me-2"></small>
                <small className="logged-in-username">Welcome, {user.userData.email}</small>
                <small className="user-logout"><Link to="/Logout">Logout</Link></small>
              </>
            }
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>+088 6 244 800</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" href="index.html"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="index.html"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="index.html"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="index.html"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;