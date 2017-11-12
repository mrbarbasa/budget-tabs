import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Overview = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
      <Text style={styles.header}>Budget Tabs</Text>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Overview;
