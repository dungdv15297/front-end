import RegisterRequest from './register-admin';
export function validation(data?: RegisterRequest): any {
  const result = {
    fullname: {
      rule: !data || (!!data.fullname && data.fullname.length > 0) ? null : false,
      msg: () => {return result.fullname.rule === false ? 'tooltip.VALIDATE003' : ''} 
    },

    phone: {
      rule: !data || (!!data.phone && data.phone.match('\\+?(0|84)\\d{9}')) ? null : false,
      msg: () => {return result.phone.rule === false ? 'tooltip.VALIDATE004' : ''} 
    },

    username: {
      firstRule: true,
      rule: !data || (!!data.username && data.username.length >= 4) ? null : false,
      msg: () => {
        return !result.username.firstRule
          ? 'tooltip.VALIDATE005'
          : result.username.rule === false ? 'tooltip.VALIDATE001' : ''
      } 
    },

    password: {
      rule: !data || (!!data.password && data.password.length >= 6) ? null : false,
      msg: () => {return result.password.rule === false ? 'tooltip.VALIDATE002' : ''} 
    },

    rePassword: {
      firstRule: !data || data.rePassword.length >= 6 ? null : false,
      secondRule: !data || data.rePassword === data.password ? null : false,
      rule: !data || (!!data.rePassword && data.rePassword.length >= 6 && data.rePassword === data.password) ? null : false,
      msg: () => {
        return result.rePassword.rule === null
          ? ''
          : !result.rePassword.firstRule
            ? 'tooltip.VALIDATE002'
            : !result.rePassword.secondRule
              ? 'tooltip.VALIDATE006'
              : ''
      } 
    },

    isValid: () => {
      return result.fullname.rule === null
        && result.phone.rule  === null
        && result.username.rule === null
        && result.password.rule === null
        && result.rePassword.rule === null
    }
  }

  return result;
}


