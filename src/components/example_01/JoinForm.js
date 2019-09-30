import React from 'react';

class JoinForm extends React.Component {
  email = '';
  password = '';

  handleChangeEmail = ({ target: { value } }) => {
    this.email = value;
  };

  handleChangePassword = ({ target: { value } }) => {
    this.password = this.password;
  };

  handleSubmit = () => {
    console.log(this.email, this.password);
  };

  render() {
    console.log('render');

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          onChange={this.handleChangeEmail}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChangePassword}
        />
        <button type="submit">가입하기</button>
      </form>
    );
  }
}

export default JoinForm;
