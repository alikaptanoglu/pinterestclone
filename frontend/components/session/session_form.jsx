import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(this.props.closeModal);
  }

  demoLogin(e) {
    this.setState(
      {
        email: "lisa@gmail.com",
        password: "lisalisa"
      },
      () => this.handleSubmit(e)
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        {this.renderErrors()}
        <button onClick={this.props.signup}> Sign up</button>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Welcome to Kimterest</h2>
            <div className="login-form">
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="email-input"
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="password-input"
                placeholder="Password"
              />
              <br />
              <input className="red-button" type="submit" value="Log in" />
              <br />
              <input
                className="red-button"
                type="submit"
                value="Demo Login"
                onClick={this.demoLogin}
              />
              <br />
              <button className="link" onClick={this.props.signup}>
                <span>Not on Kimterest yet? Sign up</span>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SessionForm;
