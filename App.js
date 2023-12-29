import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import SinglePurchaseScreen from './screens/SinglePurchaseScreen';
import COLORS from './globalStyles/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{
        title: 'Recent Expenses',
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: COLORS.offWhite,
      }} />
      <Stack.Screen name="SinglePurchase" component={SinglePurchaseScreen} options={{
        title: 'Edit Expense',
        presentation: "modal",
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: COLORS.offWhite
      }} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle: { backgroundColor: COLORS.secondary },
          // this overrides the active and inactive and needs to not be here
          // tabBarLabelStyle: { color: COLORS.offWhite},
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.gray,
        }}>
          <Tab.Screen
            name="RecentHome"
            component={StackNavigator}
            options={{
              title: "Recent Expenses",
              headerShown: false,
              tabBarIcon: ({ color }) => <Ionicons name='hourglass' color={color} size={24} />
            }}
          />
          <Tab.Screen
            name="AllExpenses"
            component={AllExpensesScreen}
            options={{
              title: "All Expenses",
              tabBarIcon: ({ color }) => <Ionicons name='calendar' color={color} size={24} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}
