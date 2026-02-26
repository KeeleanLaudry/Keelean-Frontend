import React, { useState } from 'react';

const KeeleanPro = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="keelean-pro">
      {/* Header */}
      <header className="pro-header">
        <nav className="pro-nav">
          <div className="nav-logo">
            <div className="logo-marker"></div>
            <span>KEELEAN</span>
          </div>
          <div className="nav-links">
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Container */}
      <main className="pro-main">
        <div className="pro-container">
          {/* Left Panel */}
          <div className="pro-left">
            <div className="pro-content">
              <div className="pro-badge">WELCOME TO KEELEAN</div>
              <h1 className="pro-title">
                Professional Laundry<br />
                <span>Services</span>
              </h1>
              <p className="pro-description">
                Experience the finest laundry care with our professional service. 
                We treat your clothes with utmost care and precision.
              </p>

              {/* Features Grid */}
              <div className="pro-features">
                <div className="pro-feature">
                  <div className="feature-dot"></div>
                  <div>
                    <h4>Free Pickup</h4>
                    <p>At your doorstep</p>
                  </div>
                </div>
                <div className="pro-feature">
                  <div className="feature-dot"></div>
                  <div>
                    <h4>24 Hours</h4>
                    <p>Quick delivery</p>
                  </div>
                </div>
                <div className="pro-feature">
                  <div className="feature-dot"></div>
                  <div>
                    <h4>100% Fresh</h4>
                    <p>Stain free</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="pro-stats">
                <div className="pro-stat">
                  <span className="stat-number">15K+</span>
                  <span className="stat-label">Customers</span>
                </div>
                <div className="pro-stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Loads</span>
                </div>
                <div className="pro-stat">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="pro-right">
            <div className="pro-card">
              <div className="pro-tabs">
                <button
                  className={`pro-tab ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
                >
                  Sign In
                </button>
                <button
                  className={`pro-tab ${activeTab === 'signup' ? 'active' : ''}`}
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="pro-form">
                {activeTab === 'signup' && (
                  <div className="pro-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Anderson"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="pro-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="pro-field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                {activeTab === 'login' && (
                  <div className="pro-forgot">
                    <a href="#">Forgot password?</a>
                  </div>
                )}

                <button type="submit" className="pro-button">
                  {activeTab === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="pro-divider">
                <span>Or continue with</span>
              </div>

              <div className="pro-social">
                <button className="pro-social-btn">G</button>
                <button className="pro-social-btn">f</button>
                <button className="pro-social-btn">in</button>
              </div>

              <div className="pro-footer">
                {activeTab === 'login' ? (
                  <p>
                    Don't have an account?{' '}
                    <button onClick={() => setActiveTab('signup')}>
                      Sign up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button onClick={() => setActiveTab('login')}>
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KeeleanPro;