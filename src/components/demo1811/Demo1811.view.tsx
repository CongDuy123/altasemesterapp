/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import {styles} from './Demo1811.style';
import {fetchApiList} from './Demo1811.logic';

const Demo1811 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<string[]>([]);
  const handleItem = ({item}: any) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  const handleReach = async () => {
    let urls = await fetchApiList(currentPage + 1, 3);
    setData(previous => [...previous, ...urls]);
    setCurrentPage(previous => previous + 1);
  };

  useEffect(() => {
    async function getData() {
      let urls = await fetchApiList(currentPage, 3);
      setData(urls);
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={handleItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        onEndReached={handleReach}
        onEndReachedThreshold={0.5}
        style={styles.myList}
      />
    </View>
  );
};
export default Demo1811;
