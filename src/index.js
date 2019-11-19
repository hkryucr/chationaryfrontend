import React from "react";
import { render } from "react-dom";
import style from "c/index.css.js"
import Chat from "j/Chat.js"

class App extends React.Component {
  render() {
    return (
        <Chat/>
    )
  }
}

function renderReactAppToDOM(reactNode, htmlTarget) {
    return render(reactNode, htmlTarget, () => { console.log("testing:rendered react element") });
}
  
renderReactAppToDOM(<App/>, document.getElementById("main"));