const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableOpacity,
  View,
} = ReactNative;

const Button = (props) => {
  return <Button {...props}>
    {props.children}
  </Button>;
};

module.exports = Button;
