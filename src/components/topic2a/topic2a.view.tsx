import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import style from './topic2a.style';

const Topic2a = () => {
  const [myBackGround, setMyBackGround] = useState(0.0);
  const [flatIncreate, setFlatIncreate] = useState(true);
  const [remainDays, setRemainDays] = useState(0);
  const remainDaysOfTheYear = async (myDate: Date): Promise<number> => {
    return new Promise(resole => {
      resole(150);
    });
  };
  useEffect(() => {
    async function getvalue() {
      let result = await remainDaysOfTheYear(new Date());
      setRemainDays(result);
    }
    getvalue();
  }, []);
  const handlePress = () => {
    setMyBackGround(previous => {
      if (previous >= 1) {
        setFlatIncreate(false);
        return previous - 0.1;
      } else if (previous <= 0) {
        setFlatIncreate(true);
        return previous + 0.1;
      } else {
        return flatIncreate ? previous + 0.1 : previous - 0.1;
      }
    });
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text
          style={[
            style.text,
            {color: 'blue', paddingLeft: 20, paddingRight: 20},
          ]}>
          About 120 days remaining to the new year
        </Text>
      </View>
      <ImageBackground
        source={require('../../components/assets/images/flower2.jpg')}
        style={style.bgImage}>
        <View
          style={[
            style.overlay,
            {backgroundColor: `rgba(0,0,0,${myBackGround})`},
          ]}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={style.button}>Change Opacity</Text>
          </TouchableOpacity>
          <Text style={style.text}>Hello </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Topic2a;
