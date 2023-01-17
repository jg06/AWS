const root = ReactDOM.createRoot(document.getElementById("root"));

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  // if (isLoggedIn === true) {
  //   return <UserGreeting />;
  // } else {
  //   return <GuestGreeting />;
  // }
  return isLoggedIn === true ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState((prevState) => ({
      isLoggedIn: true,
    }));
  }

  handleLogoutClick() {
    this.setState((prevState) => ({
      isLoggedIn: false,
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let button;
    // if (isLoggedIn === true) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }
    let button =
      isLoggedIn === true ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      );
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

root.render(<LoginControl />);
