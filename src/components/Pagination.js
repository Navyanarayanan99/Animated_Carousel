import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx}
            style={[styles.dot, {width: dotWidth, backgroundColor: '#444'}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 12,
    borderRadius: 12,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
});
export default Pagination;
