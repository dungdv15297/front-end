import Condition from './conditions';

export function validation(vue: Vue, condition?: Condition): any {
  const result = {

    code: {
      rule: !!condition && !!condition.code ? null : false,
      msg: () => {return result.code.rule === false ? 'Code is required' : ''} 
    },

    startDate: {
      rule: !!condition && vue.$moment(condition.startDate).isValid() ? null : false,
      msg: () => {return result.code.rule === false ? 'startDate is required' : ''} 
    },

    endDate: {
      rule: !!condition && vue.$moment(condition.endDate).isValid() ? null : false,
      msg: () => {return result.code.rule === false ? 'endDate is required' : ''} 
    },
    
    isValid: () => {
      return result.code.rule === null && result.startDate.rule  === null && result.endDate.rule  === null;
    }
  }

  return result;
}


