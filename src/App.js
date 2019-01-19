import React from "react";
import Calender from "./components/Calender";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calender</b>
            </span>
          </div>
        </header>
        <main>
          <Calender />
        </main>
      </div>
    )
  }
}


export default Calender
