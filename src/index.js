import React from "react";
import { render } from "react-dom";
import ChatNavigation from 'j/ChatNavigation';
import ChatMain from 'j/ChatMain'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ChatNavigation/>
        <ChatMain/>
      </React.Fragment>
    )
  }
}

function renderReactAppToDOM(reactNode, htmlTarget) {
    return render(reactNode, htmlTarget, () => { console.log("testing:rendered react element") });
}
  
renderReactAppToDOM(<App/>, document.getElementById("main"));