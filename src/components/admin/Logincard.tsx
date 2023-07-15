import React from 'react';

const LoginCard: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '586px', height: 'auto', maxHeight: '648px', backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <h1 style={{ fontSize: '18px', color: '#9e9e9e', paddingTop: '30px', textAlign: 'center', fontWeight: 'normal' }}>Login to your Business account</h1>
        <h2 style={{ fontSize: '30px', color: '#000000', marginTop: '50px', textAlign: 'center', fontWeight: 'normal' }}>Login</h2>
        <h3 style={{ fontSize: '18px', color: '#9e9e9e', marginTop: '20px', textAlign: 'center', fontWeight: 'normal' }}>Please login using account details below</h3>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <input type="text" placeholder="Email" style={{ width: '60%', height: '40px', padding: '10px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input type="password" placeholder="Password" style={{ width: '60%', height: '40px', padding: '10px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={{ width: '60%', height: '40px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', cursor: 'pointer' }}>Submit</button>
        </div>
        <p style={{ fontSize: '14px', color: '#9e9e9e', textAlign: 'center', marginTop: '20px' }}><a href="#">Forgot password</a></p>
        <p style={{ fontSize: '14px', color: '#9e9e9e', textAlign: 'center', marginTop: '100px' }}>If you are new here, proceed to <a href="#">Sign up</a>.</p>
      </div>
    </div>
  );
}

export default LoginCard;
