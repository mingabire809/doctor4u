/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Welcome1 from '../screens/Welcome1';
import Welcome2 from '../screens/Welcome2';
import Welcome3 from '../screens/Welcome3';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Setup from '../screens/Setup';
import Condition from '../screens/Condition';
import Home from '../screens/Home';
import Add from '../screens/Add';
import { Ionicons } from '@expo/vector-icons';
import Search from '../screens/Search';
import Appointment from '../screens/Appointment';
import { MaterialIcons } from '@expo/vector-icons';
import Settings from '../screens/Settings';
import SingleDoctor from '../screens/SingleDoctor';
import MakeAppointment from '../screens/MakeAppointment';
import Payment from '../screens/Payment';
 

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Welcome1'>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome1" component={Welcome1} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome2" component={Welcome2} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome3" component={Welcome3} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Setup" component={Setup} options={{ headerShown: false }} />
      <Stack.Screen name="Condition" component={Condition} options={{ headerShown: false }} />
      <Stack.Screen name="SingleDoctor" component={SingleDoctor} options={{ headerShown: false }} />
      <Stack.Screen name="MakeAppointment" component={MakeAppointment} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'rgba(0,152,153,255)',
        
      }}>
      
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: ' ',
          headerShown: false ,
          tabBarIcon: ({ color }) => <Ionicons name="md-home-sharp" size={30} color={color} />,
        }}
      />

<BottomTab.Screen
        name="Add"
        component={Add}
        options={{
          title: ' ',
          headerShown: false ,
          tabBarIcon: ({ color }) => <Ionicons name="add" size={35} color={color} />,
        }}
      />

<BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          title: ' ',
          headerShown: false ,
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={30} color={color} />,
        }}
      />

<BottomTab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          title: ' ',
          headerShown: false ,
          tabBarIcon: ({ color }) => <MaterialIcons name="book-online" size={30} color={color} />,
        }}
      />

<BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: ' ',
          headerShown: false ,
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
