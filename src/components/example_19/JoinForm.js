import React, { useCallback } from 'react';

import Input from './Input';
import useInputState from './useInputState';
import Width from './Width';

function JoinForm() {
  const [email, setEmail, handleChangeEmail] = useInputState('');
  const [password, setPassword, handleChangePassword] = useInputState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      console.log(email, password);
    },
    [email, password]
  );

  const handleReset = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
      </form>
      {email !== 'abcd' && <Width />}
    </>
  );
}

export default JoinForm;
