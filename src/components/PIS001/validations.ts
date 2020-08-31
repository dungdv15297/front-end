import Condition from './conditions';

export function validation(condition: Condition): any {
  const result = {
    demo: {
      rule: !!condition.demo,
      message: 'abcaasd'
    },
    demo2: {
      rule: condition.demo2 !== '123',
      message: 'demo'
    },
    isValid: () => {
      return result.demo.rule && result.demo2.rule
    }
  }

  return result;

}

