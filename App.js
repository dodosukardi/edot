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
    isLike: false,
    isDislike: false,
  }, {
    id: 2,
    img: require('./src/images/2.jpg'),
    likes: 85,
    isLike: false,
    isDislike: false,
  }]);

  const eachHandler = (id, type) => {
    let tempData = [...data];
    const objIndex = data.findIndex((obj => obj.id === id));

    if (type === 'like') {
      tempData[objIndex].isLike = !tempData[objIndex].isLike || false;
      tempData[objIndex].isDislike = false;
    } else {
      tempData[objIndex].isDislike = !tempData[objIndex].isDislike || false;
      tempData[objIndex].isLike = false;
    }

    setData(tempData);
  };

  const bulkHandler = (like, dislike) => {
    let tempData = [...data];

    for (let i = 0; i < tempData.length; i += 1) {
      tempData[i].isLike = like;
      tempData[i].isDislike = dislike;
    }

    setData(tempData);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.topButtonsContainer}>
        <Button
          onPress={() => bulkHandler(true, false)}
          type="primary"
          text="Like All"
        />
        <Button
          onPress={() => bulkHandler(false, false)}
          type="light"
          text="Reset All"
        />
        <Button
          onPress={() => bulkHandler(false, true)}
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
