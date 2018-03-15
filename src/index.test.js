import isEmail from 'isemail-es5';

import emailPropType from './index';

describe('Email Prop Type Validation', () => {
  const propName = 'baejadley';
  const componentName = 'jaebaebae';
  const email = 'foobar';

  afterEach(() => {
    isEmail.validate.mockClear();
    isEmail.validate.mockRestore();
  });

  describe('urlPropType', () => {
    it('should throw an error if prop value is not a valid URL', () => {
      isEmail.validate = jest.fn().mockImplementation(() => false);
      const props = {};
      props[propName] = email;

      expect(emailPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Email Prop Value: ${email} for ${propName} in ${componentName}`));
      expect(isEmail.validate).toHaveBeenCalledTimes(1);
      expect(isEmail.validate).toHaveBeenCalledWith(email);
    });

    it('should throw an error if prop value is not a string', () => {
      isEmail.validate = jest.fn().mockImplementation(() => false);
      const props = {};
      props[propName] = 1;

      expect(emailPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Email Prop Value: 1 for ${propName} in ${componentName}`));
      expect(isEmail.validate).not.toHaveBeenCalled();
    });

    it('should return null if prop is not defined', () => {
      const props = {};

      expect(emailPropType(props, propName, componentName)).toBeNull();
      expect(isEmail.validate).not.toHaveBeenCalled();
    });

    it('should return null if prop value is a valid email', () => {
      isEmail.validate = jest.fn().mockImplementation(() => true);
      const props = {};
      props[propName] = email;

      expect(emailPropType(props, propName, componentName)).toBeNull();
      expect(isEmail.validate).toHaveBeenCalledTimes(1);
      expect(isEmail.validate).toHaveBeenCalledWith(email);
    });
  });

  describe('requiredEmailPropType', () => {
    it('should throw an error if prop value is not a valid email', () => {
      isEmail.validate = jest.fn().mockImplementation(() => false);
      const props = {};
      props[propName] = email;

      expect(emailPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Email Prop Value: ${email} for ${propName} in ${componentName}`));
      expect(isEmail.validate).toHaveBeenCalledTimes(1);
      expect(isEmail.validate).toHaveBeenCalledWith(email);
    });

    it('should throw an error if prop value is not a string', () => {
      isEmail.validate = jest.fn().mockImplementation(() => false);
      const props = {};
      props[propName] = 1;

      expect(emailPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Email Prop Value: 1 for ${propName} in ${componentName}`));
      expect(isEmail.validate).not.toHaveBeenCalled();
    });

    it('should throw an error if prop is not defined', () => {
      const props = {};
      expect(emailPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Email Prop Value: undefined for ${propName} in ${componentName}`));
      expect(isEmail.validate).toHaveBeenCalledTimes(0);
    });

    it('should return null if prop value is a valid email', () => {
      isEmail.validate = jest.fn().mockImplementation(() => true);
      const props = {};
      props[propName] = email;

      expect(emailPropType.isRequired(props, propName, componentName)).toBeNull();
      expect(isEmail.validate).toHaveBeenCalledTimes(1);
      expect(isEmail.validate).toHaveBeenCalledWith(email);
    });
  });
});
