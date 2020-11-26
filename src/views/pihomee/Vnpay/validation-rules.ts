import VnPayData from './vn-pay';

export function validation(data?: VnPayData): any {
  const result = {
    amount: {
      rule: !data || (!!data.amount && data.amount.length > 0) ? null : false,
      msg: () => {return result.amount.rule === false ? 'Vui lòng chọn số tiền cần nạp' : ''} 
    },

    bank: {
      rule: !data || (!!data.bank && data.bank.length > 0) ? null : false,
      msg: () => {return result.amount.rule === false ? 'Vui lòng chọn ngân hàng muốn thanh toán' : ''} 
    },

    isValid: () => {
      return result.amount.rule === null
        && result.amount.rule  === null
    }
  }

  return result;
}


