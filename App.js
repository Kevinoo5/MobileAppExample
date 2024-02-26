import React, { useEffect } from "react";
import { Image } from "react-native";

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import SignIn from "./src/screens/auth/SignIn";

import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Home from "./src/screens/app/Home";

import Config from "react-native-config";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./src/utils/colors";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const ProductDetails = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>ProductDetails</Text>
      </View>
    </SafeAreaView>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === "Home") {
          icon = focused ? require("./src/assets/tabs/home_active.png") : require("./src/assets/tabs/home.png");
        } else if (route.name === "Favorites") {
          icon = focused ? require("./src/assets/tabs/bookmark_active.png") : require("./src/assets/tabs/bookmark.png");
        }
        else if (route.name === "Profile") {
          icon = focused ? require("./src/assets/tabs/profile_active.png") : require("./src/assets/tabs/profile.png");
        }

        return <Image source={icon} style={{width: 24, height: 24}} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGray },
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


const App = () => {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.IOS_CLIENT_ID,
    });
  }, []);

  const theme = {
    colors: {
      background: "white",
    },
  };

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default React.memo(App);