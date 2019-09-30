import React from 'react';
import Input from './Input';

class JoinForm extends React.Component {
  email = '';
  password = '';
  state = {
    reset: 0
  };

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
    this.setState({
      reset: this.state.reset + 1
    });
  };

  render() {
    const { reset } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          key={reset + 'email'}
          type="email"
          placeholder="이메일"
          onChange={this.handleChangeEmail}
        />
        <Input
          key={reset + 'password'}
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
