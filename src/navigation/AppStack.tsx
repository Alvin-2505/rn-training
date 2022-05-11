import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./BottomTabStack";
import HomeScreen from "../screens/dashboard/home";
import InfoScreen from "../screens/dashboard/info";
import LoginScreen from "../screens/login";
import WelcomeScreen from "../screens/welcome";
import { NavigationNames } from "../constants/navigation-names";
import AlvinComponent from "../screens/alvinPersonalPage";
import ListScreen from "../screens/alvinPersonalPage/ListScreen";
import CounterApp from "../screens/testFolder/counterReducer";
import ColorApp from "../screens/alvinPersonalPage/color";
import colorChanger from "../screens/color/index";
import ColorChanger from "../screens/color/colorTestreducer";
import TextScreen from "../screens/testFolder/textReducerCopy";
import SearchScreen from "../screens/testFolder/SearchScreen";
import ResultsShowScreen from "../screens/testFolder/ResultsShowScreen";

 export type RootStackParamList = {
  Login: undefined;
  Welcome: undefined;
  Dashboard: undefined;
  Info: undefined;
  AlvinComponent: undefined;
  ListScreen: undefined;
  CounterApp: undefined;
  ColorApp: undefined;
  ColorChanger: undefined;
  TextScreen: undefined;
  SearchScreen: undefined;
  ResultsShowScreen: {id:string}
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name={NavigationNames.Login}
          component={LoginScreen}
          options={{
            title: "Login",
            headerLeft: () => null
          }}
        />
        <Stack.Screen
          name={NavigationNames.Welcome}
          component={WelcomeScreen}
          options={{
            title: "Welcome"
          }}
        />
        <Stack.Screen
          name={NavigationNames.Dashboard}
          component={BottomTabStack}
          options={{
            headerLeft: () => null
          }}
        />
        <Stack.Screen
          name={NavigationNames.Info}
          component={InfoScreen}
          options={{
            title: "Info"
          }}
        />
        <Stack.Screen
          name = {NavigationNames.AlvinComponent}
          component={AlvinComponent}
          options={{
            title: "Greetings!"
          }}
        />
        <Stack.Screen
          name = {NavigationNames.ListScreen}
          component={ListScreen}
          options={{
            title: "Day 7 Exercise"
          }}
        />
        <Stack.Screen 
          name = {NavigationNames.CounterApp}
          component = {CounterApp}
          options = {{
            title: "Counter"
          }}
        />
        <Stack.Screen 
        name = {NavigationNames.ColorApp}
        component = {ColorApp}
        options = {{
          title: "Changing Color!"
        }}
        />
        <Stack.Screen
        name = {NavigationNames.ColorChanger}
        component = {ColorChanger}
        options = {{
          title: "Change Colors by Clicks!"
        }}
        />
        <Stack.Screen
        name = {NavigationNames.SearchScreen}
        component = {SearchScreen}
        options = {{
          title: "Search for Restaurant!"
        }}
        />
        <Stack.Screen
        name = {NavigationNames.ResultsShowScreen}
        component = {ResultsShowScreen}
        options = {{
          title: 'More Details'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
