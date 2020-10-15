import AccountDetail from '@/base/domains/account-detail';
import PasswordChagneRequest from '@/base/request/password-change-request';

export function validationUpdateInfor(detailData?: AccountDetail): any {
  const result = {
    
    isValid: () => {
      return true;
    }
  }
  return result;
}

export function validationChangePass(updateAccount?: PasswordChagneRequest): any {
  const result = {
    
    isValid: () => {
      return true;
    }
  }
  return result;
}


