import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ExpenseList } from '../../components';

// TODO
const rawExpenses = [
  {
    id: 1,
    name: 'Groceries',
    amount: 150.77,
  },
  {
    id: 2,
    name: 'Games',
    amount: 247.93,
  },
  {
    id: 3,
    name: 'Gadgets',
    amount: 129.8,
  },
  {
    id: 4,
    name: 'Gismos',
    amount: 127.2,
  },
];

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: rawExpenses,
      totalExpenses: rawExpenses
        .reduce((p, c) => {
          return p + c.amount;
        }, 0)
        .toFixed(2),
    };
  }
  render() {
    const { navigation } = this.props;
    const { expenses, totalExpenses } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Text style={styles.header}>Budget Tabs</Text>
          <Text style={styles.totalExpenses}>{totalExpenses}</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
          <Button
            title="Add Expense"
            onPress={() => navigation.navigate('AddExpense')}
          />
        </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
          <ExpenseList expenses={expenses} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: 'Source Sans Pro',
    fontSize: 30,
    textAlign: 'center',
  },
  totalExpenses: {
    fontFamily: 'Source Code Pro',
    fontSize: 30,
    textAlign: 'center',
  },
});

Overview.propTypes = {
  navigation: PropTypes.object,
};

export default Overview;
