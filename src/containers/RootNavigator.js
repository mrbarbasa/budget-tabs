import { StackNavigator } from 'react-navigation';
import Overview from './Overview/Overview';
import AddExpense from './AddExpense/AddExpense';

const RootNavigator = StackNavigator({
  Overview: {
    screen: Overview,
    navigationOptions: {
      headerTitle: 'Overview',
    },
  },
  AddExpense: {
    screen: AddExpense,
    navigationOptions: {
      headerTitle: 'Add Expense',
    },
  },
});

export default RootNavigator;
