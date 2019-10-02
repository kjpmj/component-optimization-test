import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Dialog extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="dialog">
        <h2>Hello, React</h2>
        <br />
        <p>샬살샬라 살사솰러 솰라</p>
      </div>,
      document.getElementById('dialog')
    );
  }
}

export default Dialog;
