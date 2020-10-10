import LoginData from './login-data';

export function validation(loginData?: LoginData): any {
  const result = {
    username: {
      rule: !loginData || (!!loginData.username && loginData.username.length >= 4) ? null : false,
      msg: () => {return result.username.rule === false ? 'tooltip.VALIDATE001' : ''} 
    },

    password: {
      rule: !loginData || (!!loginData.password && loginData.password.length >= 6) ? null : false,
      msg: () => {return result.password.rule === false ? 'tooltip.VALIDATE002' : ''} 
    },

    isValid: () => {
      return result.username.rule === null && result.password.rule  === null;
    }
  }

  return result;
}


