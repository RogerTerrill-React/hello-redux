import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducers from "./reducers";
import { createStore } from 'redux';

const initialState = { tech: "React"};
const store = createStore(reducers, initialState);


class App extends Component {
  
  render() {
    
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
