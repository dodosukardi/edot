import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import { theme } from '../styles/global';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  bodyText: {
    ...theme.textVariants.body,
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    gap: theme.spacing.s,
    padding: theme.spacing.m,
    paddingTop: theme.spacing.s,
    paddingBottom: theme.spacing.s,
    borderRadius: theme.spacing.s,
    elevation: theme.spacing.s,
  },
});

const Button = (props) => {
  const {
    onPress,
    text,
    type,
    icon,
  } = props;

  const buttonType = {
    light: {
      color: theme.colors.light,
      backgroundColor: 'white',
    },
    primary: {
      color: 'white',
      backgroundColor: theme.colors.primary,
    },
    danger: {
      color: 'white',
      backgroundColor: theme.colors.danger,
    },
  }[type];

  return (
    <Pressable
      style={[
        buttonType,
        styles.button
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[
          styles.bodyText,
          buttonType,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  onPress: () => {},
  text: 'Button',
  type: 'light',
  icon: null,
};

export default Button;
