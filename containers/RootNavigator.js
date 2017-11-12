import { StackNavigator } from 'react-navigation';
import Overview from './Overview';
import AddExpense from './AddExpense';

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
