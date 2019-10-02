import React from 'react';
import Dialog from './Dialog';

class WelcomeDialog extends React.PureComponent {
  render() {
    return (
      <Dialog
        header={<h2>반가워요!</h2>}
        body={<p>리액트 부트캠프에 오신 것을 환영합니다.</p>}
        footer={<button className="button">확인</button>}
      />
    );
  }
}

export default WelcomeDialog;
