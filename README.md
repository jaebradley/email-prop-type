[![Build Status](https://travis-ci.org/jaebradley/email-prop-type.svg?branch=master)](https://travis-ci.org/jaebradley/email-prop-type)
[![codecov](https://codecov.io/gh/jaebradley/email-prop-type/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/email-prop-type)
[![npm](https://img.shields.io/npm/dt/email-prop-type.svg)](https://www.npmjs.com/package/email-prop-type)
[![npm](https://img.shields.io/npm/v/email-prop-type.svg)](https://www.npmjs.com/package/email-prop-type)
[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/email-prop-type.svg)](https://greenkeeper.io/)

# Email Prop Type

## Introduction
This package is used to validate if a React Prop value is a valid email.

Currently, there is no email prop type defined by [the `prop-types` package](https://www.npmjs.com/package/prop-types). While using `PropType.string` works, why not be as specific as possible when validating your props?

Additionally, though [it's relatively straightforward to create a custom prop type validator](https://www.ian-thomas.net/custom-proptype-validation-with-react/), if you need to implement similar prop type checking in multiple packages, you might not want to repeat yourself.

Depends on [the `isemail` package](https://www.npmjs.com/package/isemail). While the `isemail` package has options to [specify various error levels](https://github.com/hapijs/isemail#validateemail-options-callback), `email-prop-type` implements the highest level of granularity, i.e. a perfectly granular email address.

## Installation
`npm install --save email-prop-type`

## Example Usage
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';

// Create a basic Hyperlink Component with a mailto href value
const Hyperlink = props => (
  <a href={`${mailto:props.emailAddress}`>{props.text}</a>
);

Hyperlink.propTypes = {
  text: PropTypes.string.isRequired,
  emailAddress: emailPropType.isRequired, // can also specify emailPropType if it is not required
};
```

## Alternatives
I didn't see many alternatives:
  * It doesn't look like [the `airbnb/prop-types` project](https://github.com/airbnb/prop-types) has email validation.
  * There's also [the `react-validator-prop-types` library](https://www.npmjs.com/package/react-validator-prop-types) but if you just want email validation, it might be too heavyweight.
