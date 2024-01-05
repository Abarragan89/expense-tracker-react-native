import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import IconButton from './components/IconButton';
import COLORS from './globalStyles/colors';
import { store } from './redux/store'
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ navigation})=> ({
      tabBarStyle: { backgroundColor: COLORS.secondary },
      tabBarActiveTintColor: COLORS.orange,
      tabBarInactiveTintColor: COLORS.gray,
      headerStyle: { backgroundColor: COLORS.secondary },
      headerTintColor: COLORS.offWhite,
      headerRight: ({ tintColor }) => (
        <IconButton 
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense')
          }}
        />
      )
    })}>
      <Tab.Screen
        name="RecentHome"
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarIcon: ({ color }) => <Ionicons name='hourglass' color={color} size={32} />,
        }}
      />
      <Tab.Screen
        name="AllExpensesHome"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color }) => <Ionicons name='calendar' color={color} size={32} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ViewExpenses" component={TabNavigator} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} options={{
            presentation: "modal",
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTintColor: COLORS.offWhite
          }} />
        </Stack.Navigator>

      </NavigationContainer>
      </Provider>
    </>

  );
}
