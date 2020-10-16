import AccountDetail from '@/base/domains/account-detail';
import PasswordChangeRequest from '@/base/request/password-change-request';

export function validationUpdateInfor(detailData?: AccountDetail): any {
  const result = {
    
    isValid: () => {
      return true;
    }
  }
  return result;
}

export function validationChangePass(updateAccount?: PasswordChangeRequest): any {
  const result = {
    password: {
      rule: !updateAccount || (!!updateAccount.password && updateAccount.password.length >= 6) ? null : false,
      msg: () => {return result.password.rule === false ? 'tooltip.VALIDATE002' : ''} 
    },

    newPassword: {
      rule: !updateAccount || (!!updateAccount.newPassword && updateAccount.newPassword.length >= 6) ? null : false,
      msg: () => {return result.newPassword.rule === false ? 'tooltip.VALIDATE002' : ''} 
    },

    confirm: {
      firstRule: !updateAccount || updateAccount.confirm.length >= 6 ? null : false,
      secondRule: !updateAccount || updateAccount.confirm === updateAccount.newPassword ? null : false,
      rule: !updateAccount || (!!updateAccount.confirm && updateAccount.confirm.length >= 6 && updateAccount.confirm === updateAccount.newPassword) ? null : false,
      msg: () => {
        return result.confirm.rule === null
          ? ''
          : !result.confirm.firstRule
            ? 'tooltip.VALIDATE002'
            : !result.confirm.secondRule
              ? 'tooltip.VALIDATE006'
              : ''
      } 
    },

    isValid: () => {
      return result.password.rule === null && result.newPassword.rule === null && result.confirm.rule === null;
    }
  }
  return result;
}


