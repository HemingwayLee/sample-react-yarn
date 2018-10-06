import React from 'react';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 36,
      color: "#FF0000"
    }

    return (
      <div style = {myStyle}>Hello World</div>
    );
  }
}

export default App;