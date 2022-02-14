import React from 'react';

const SignUpForm = (props) => {
  const [sign, setSign] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    newsLetter: '',
  });
  const handleSign = (e) => {
    const { name, value, type, checked } = e.target;
    setSign((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignSubmit = (e) => {
    e.preventDefault();
    if (sign.password === sign.confirmPassword) {
      console.log('Successfully signed up');
    } else {
      console.log('Passwords do not match');
    }

    if (sign.newsLetter) {
      console.log('Thanks for signing up for our newsletter!');
    }
  };
  return (
    <div className="main-container">
      <div className="container">
        <form onSubmit={handleSignSubmit} className="signform" className={props.darkMode ? "dark" : ""}>
          <input
            type="emal"
            placeholder="Email"
            name="email"
            value={sign.email}
            onChange={handleSign}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={sign.password}
            onChange={handleSign}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={sign.confirmPassword}
            onChange={handleSign}
          />
          <label htmlFor="newsLetter" className="label">
            I want to join the newsLetter
          </label>
          <input
            type="checkbox"
            id="newsLetter"
            checked={sign.newsLetter}
            name="newsLetter"
            onChange={handleSign}
            className="check"
          />
          <button className="button">Sign Up</button>
        </form>
        <div>
          <p>light <span onClick={props.toggleDark} className="toggleDark">Toggle</span> dark</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
