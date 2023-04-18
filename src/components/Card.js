import React from 'react';
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';
import { theme } from '../styles/global';
import Button from './Button';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.m,
    elevation: theme.spacing.s,
  },
  cardInfo: {
    flex: 0,
    flexDirection: 'row',
    padding: theme.spacing.m,
    gap: theme.spacing.s,
  },
  img: {
    borderTopLeftRadius: theme.spacing.s,
    borderTopRightRadius: theme.spacing.s,
    width: '100%',
    height: 200,
  },
  check: {
    width: 12,
    height: 12,
    marginTop: 2,
  }
});

const Card = (props) => {
  const {
    img,
    onChange,
    isLike,
    isDislike,
    likes,
  } = props;

  const renderCheck = () => (
    <Image
      source={require('../images/check.png')}
      style={styles.check}
    />
  );

  return (
    <View style={styles.card}>
      <Image
        source={img}
        style={styles.img}
      />
      <View style={styles.cardInfo}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button
            onPress={() => {}}
            type="light"
            text={`${Number(likes) + isLike} Likes`}
          />
        </View>
        <Button
          onPress={() => onChange('like')}
          type="primary"
          text="Like"
          icon={isLike ? renderCheck() : null}
        />
        <Button
          onPress={() => onChange('dislike')}
          type="danger"
          text="Dislike"
          icon={isDislike ? renderCheck() : null}
        />
      </View>
    </View>
  );
};

Card.propTypes = {
  img: PropTypes.number,
  onChange: PropTypes.func,
  isLike: PropTypes.bool,
  isDislike: PropTypes.bool,
  likes: PropTypes.number,
};

Card.defaultProps = {
  img: null,
  onChange: () => {},
  isLike: false,
  isDislike: false,
  likes: 0,
};

export default Card;
