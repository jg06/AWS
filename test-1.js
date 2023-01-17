const root = document.getElementById("root");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  add = () => {
    this.setState((v1) => ({
      counter: v1.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <span>클릭: {this.state.counter}</span>
        <button style={{ color: "red" }} onClick={this.add}>
          클릭
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
