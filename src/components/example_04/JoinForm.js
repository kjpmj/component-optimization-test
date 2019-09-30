import React from 'react';
import Input from './Input';

class JoinForm extends React.Component {
  email = '';
  password = '';

  handleChangeEmail = value => {
    this.email = value;
  };

  handleChangePassword = value => {
    this.password = value;
  };

  handleSubmit = () => {
    console.log(this.email, this.password);
  };

  handleReset = () => {
    this.email = '';
    this.password = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          onChange={this.handleChangeEmail}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChangePassword}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={this.handleReset}>
          초기화
        </button>
      </form>
    );
  }
}

export default JoinForm;
