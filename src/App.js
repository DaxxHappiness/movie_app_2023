import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // console.log('add');
    this.setState(current => ({ count: this.state.count+1, }));
  }

  minus = () => {
    // console.log('minus');
    this.setState(current => ({ count: this.state.count-1, }));
  }

  render() {
    // return <h1>I'm a class component</h1>;
    return (
      <div>
        <h1>11/16 exam</h1>
        <h2>The number is: {this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
