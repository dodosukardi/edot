import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { theme } from './src/styles/global';
import Button from './src/components/Button';
import Card from './src/components/Card';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
  },
  topButtonsContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: theme.spacing.s,
    marginBottom: theme.spacing.l,
  },
  cardContainer: {
    flex: 0,
    flexDirection: 'column',
  }
});

const App = () => {
  const [data, setData] = useState([{
    id: 1,
    img: require('./src/images/1.jpg'),
    likes: 100,
    isLike: null,
    isDislike: null,
  }, {
    id: 2,
    img: require('./src/images/2.jpg'),
    likes: 85,
    isLike: null,
    isDislike: null,
  }]);

  const eachHandler = (id, type) => {
    let tempData = [...data];
    const objIndex = data.findIndex((obj => obj.id === id));

    if (type === 'like') {
      tempData[objIndex].isLike = tempData[objIndex].isLike === null || null;
      tempData[objIndex].isDislike = null;
    } else {
      tempData[objIndex].isDislike = tempData[objIndex].isDislike === null || null;
      tempData[objIndex].isLike = null;
    }

    setData(tempData);
  };

  const bulkHandler = (type) => {
    let tempData = [...data];

    if (type === 'like') {
      for (let i = 0; i < tempData.length; i += 1) {
        tempData[i].isLike = true;
        tempData[i].isDislike = null;
      }
    } else if (type === 'dislike') {
      for (let i = 0; i < tempData.length; i += 1) {
        tempData[i].isLike = null;
        tempData[i].isDislike = true;
      }
    } else {
      for (let i = 0; i < tempData.length; i += 1) {
        tempData[i].isLike = null;
        tempData[i].isDislike = null;
      }
    }

    setData(tempData);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.topButtonsContainer}>
        <Button
          onPress={() => bulkHandler('like')}
          type="primary"
          text="Like All"
        />
        <Button
          onPress={() => bulkHandler('reset')}
          type="light"
          text="Reset All"
        />
        <Button
          onPress={() => bulkHandler('dislike')}
          type="danger"
          text="Dislike All"
        />
      </View>

      <View style={styles.cardContainer}>
        {data?.map((item, index) => (
          <Card
            key={item?.id || index.toString()}
            likes={item?.likes || 0}
            img={item?.img || ''}
            isLike={item?.isLike || false}
            isDislike={item?.isDislike || false}
            onChange={(val) => eachHandler(item?.id, val)}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
