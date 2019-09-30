import React from 'react';
import Input from './Input';

class JoinForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChangeEmail = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  handleChangePassword = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  handleSubmit = () => {
    console.log(this.state.email, this.state.password);
  };

  handleReset = () => {
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
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
