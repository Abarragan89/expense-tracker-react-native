import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import COLORS from './globalStyles/colors';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerStyle: { backgroundColor: COLORS.secondary},
          headerTintColor: COLORS.offWhite,
          tabBarStyle: { backgroundColor: COLORS.secondary },
          // this overrides the active and inactive and needs to not be here
          // tabBarLabelStyle: { color: COLORS.offWhite},
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.gray,
        }}>
          <Tab.Screen 
            name="RecentExpenses" 
            component={RecentExpensesScreen} 
            options={{
              title: "Recent",
              tabBarIcon: ({color }) => <Ionicons name='hourglass' color={color} size={24} />
            }}  
          />
          <Tab.Screen 
            name="AllExpenses"
            component={AllExpensesScreen} 
            options={{
              title: "All Expenses",
              tabBarIcon: ({color }) => <Ionicons name='calendar' color={color} size={24} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}
