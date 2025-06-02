import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from '../assets/Model.png';

const Signup = () => {
  return (
    <div className="d-flex vh-100">
      {/* Left side image */}
      <div className="w-50 d-none d-md-block position-relative">
        <img
          src={Model} // ← Replace with your actual image path
          alt="Bakery"
          className="img-fluid vh-100"
          style={{ objectFit: 'cover', width: '100%' }}
        />
        <div className="position-absolute bottom-0 text-white p-4" style={{ background: 'rgba(0,0,0,0.5)', width: '100%' }}>
          <h5>No Hazzles</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-100 w-md-50 d-flex align-items-center justify-content-center">
        <div className="w-75" style={{ maxWidth: 400 }}>
          <h3 className="fw-bold">Create your free account</h3>
          <p>
            Already registered? <a href="/login">Sign in</a>
          </p>

          <form>
            <div className="row mb-3">
              <div className="col">
                <p>First Name</p>
                <input type="text" className="form-control" placeholder="First Name" defaultValue="Joshua" />
              </div>
              <div className="col">
                <p>Last Name</p>
                <input type="text" className="form-control" placeholder="Last Name" defaultValue="Bakare" />
              </div>
            </div>

            <div className="mb-3">
                <p>Email</p>
              <input type="email" className="form-control" placeholder="Email" defaultValue="josh.bakery@gmail.com" />
            </div>

            <div className="mb-3">
                <p>Password</p>
              <input type="password" className="form-control" placeholder="Password" defaultValue="************" />
            </div>

            <button type="submit" className="btn btn-success w-100">Continue</button>
          </form>

          <small className="d-block mt-3 text-muted">
            By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </small>
          <p className="text-muted mt-2">&copy; 2019 TinyLabs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
