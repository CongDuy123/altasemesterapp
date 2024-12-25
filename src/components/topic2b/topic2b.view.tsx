import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './topic2b.style';

const Topic2b = () => {
  const [resultText, setResultText] = useState('0');
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.textResult}>{resultText}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setFirstOperand(0);
            setSecondOperand(0);
            setOperator('');
            setResultText('');
          }}>
          <Text>Ac</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('7');
            if (operator != '') {
              setSecondOperand(7);
            } else {
              setFirstOperand(7);
            }
          }}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('8');
            if (operator != '') {
              setSecondOperand(8);
            } else {
              setFirstOperand(8);
            }
          }}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('9');
            if (operator != '') {
              setSecondOperand(9);
            } else {
              setFirstOperand(9);
            }
          }}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setOperator('+');
            setFirstOperand(secondOperand);
            setResultText('');
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('4');
            if (operator != '') {
              setSecondOperand(4);
            } else {
              setFirstOperand(4);
            }
          }}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('5');
            if (operator != '') {
              setSecondOperand(5);
            } else {
              setFirstOperand(5);
            }
          }}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('6');
            if (operator != '') {
              setSecondOperand(6);
            } else {
              setFirstOperand(6);
            }
          }}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('1');
            if (operator != '') {
              setSecondOperand(1);
            } else {
              setFirstOperand(1);
            }
          }}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('2');
            if (operator != '') {
              setSecondOperand(2);
            } else {
              setFirstOperand(2);
            }
          }}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setResultText('3');
            if (operator != '') {
              setSecondOperand(3);
            } else {
              setFirstOperand(3);
            }
          }}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemZero}
          onPress={() => {
            setResultText('0');
            if (operator != '') {
              setSecondOperand(0);
            } else {
              setFirstOperand(0);
            }
          }}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            let result = 0;
            if (operator === '+') {
              result = firstOperand + secondOperand;
            }

            setResultText(result.toString());
            setFirstOperand(result);
            setSecondOperand(0);
            setOperator('');
          }}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topic2b;
