import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Dialog extends React.Component {
  render() {
    const { header, body, footer } = this.props;
    return ReactDOM.createPortal(
      <div className="dialog">
        {header}
        <hr />
        {body}
        <hr />
        {footer}
      </div>,
      document.getElementById('dialog')
    );
  }
}

export default Dialog;
