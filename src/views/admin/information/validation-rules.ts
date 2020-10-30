import AccountDetail from '@/base/domains/account-detail';
import PasswordChangeRequest from '@/base/request/password-change-request';

const emailRegx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export function validationUpdateInfor(detailData?: AccountDetail): any {
  const result = {
    email: {
      rule: !detailData || detailData.email.match(emailRegx) ? null : false,
      msg: () => { return result.email.rule === false ? 'tooltip.VALIDATE007' : '' }
    },
    isValid: () => {
      return result.email.rule === null;
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
          : result.confirm.firstRule === false
            ? 'tooltip.VALIDATE002'
            : result.confirm.secondRule === false
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


