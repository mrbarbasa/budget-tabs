import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Overview = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
      <Text style={styles.header}>Budget Tabs</Text>
      <Text style={styles.totalExpenses}>3721.11</Text>
    </View>
    <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
  </View>
);

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

export default Overview;
