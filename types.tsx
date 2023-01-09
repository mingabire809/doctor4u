/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Welcome1:undefined;
  Welcome2:undefined;
  Welcome3:undefined;
  Login:undefined;
  SignIn:undefined;
  Setup:undefined;
  Condition: undefined;
  Home: undefined;
  Add:undefined;
  Search:undefined;
  Appointment:undefined;
  Settings: undefined;
  SingleDoctor:undefined;
  MakeAppointment:undefined;
  Payment:undefined;
  Booking1:undefined;
  Booking2:undefined;
  Booking3:undefined;
  Booking4:undefined;
  Doctors:undefined;
  SingleAppointment:undefined;
  Review:undefined;
  Profile:undefined;
  Forgot:undefined;
  Otp:undefined;
  Recovery:undefined;
  Favourite:undefined;
  Faq:undefined;
  Help: undefined;
  Symptoms:undefined;
  MySymptoms:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Add:undefined;
  Search:undefined;
  Appointment:undefined;
  Settings: undefined;
  
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
