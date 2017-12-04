import isEmail from 'isemail';

const requiredEmailPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value == null || !isEmail.validate(value)) {
    return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`);
  }

  return null;
};

const emailPropType = (props, propName, componentName) => {
  if (props[propName] == null) {
    return null;
  }

  return requiredEmailPropType(props, propName, componentName);
};

emailPropType.isRequired = requiredEmailPropType;

export default emailPropType;
