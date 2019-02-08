import React, { Component, Fragment } from "react";
import "./App.css";

function* gettingStarted() {
  yield <h1>Step 1</h1>;
  yield <h1>Step 2</h1>;
  yield <h1>Step 3</h1>;
  yield <h1>Step 4</h1>;
  yield <h1>Step 5</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gettingStarted: gettingStarted(),
      currentStep: null
    };
    this.nextItem = this.nextItem.bind(this);
  }

  nextItem() {
    this.setState({
      currentStep: this.state.gettingStarted.next().value
    });
  }

  componentDidMount() {
    this.nextItem();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.currentStep ? (
            <Fragment>
              <div>{this.state.currentStep}</div>
              <div>
                <button onClick={this.nextItem}>Next &raquo;</button>
              </div>
            </Fragment>
          ) : (
            <div>Fin</div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
