import isEmail from 'isemail';

const emailPropType = (props, propName, componentName) => {
  const value = props[propName];
  if (value == null || isEmail.validate(value)) {
    return null;
  }

  throw new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`);
};

const requiredEmailPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (isEmail.validate(value)) {
    return null;
  }

  throw new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`);
};

emailPropType.isRequired = requiredEmailPropType;

export default emailPropType;
