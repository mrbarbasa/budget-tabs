import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const ExpenseList = ({ expenses }) => (
  <View style={styles.container}>
    {expenses.map(item => (
      <View key={item.id} style={styles.row}>
        <Text style={styles.name}>{item.name} - </Text>
        <Text style={styles.amount}>{item.amount.toFixed(2)}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 30,
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Source Sans Pro',
    fontSize: 30,
    textAlign: 'center',
  },
  amount: {
    fontFamily: 'Source Code Pro',
    fontSize: 30,
    textAlign: 'center',
  },
});

ExpenseList.defaultProps = {
  expenses: [],
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpenseList;
