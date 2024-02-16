import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import SignIn from "./src/screens/auth/SignIn";
import Config from "react-native-config";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.IOS_CLIENT_ID,
    });
  }, []);
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

export default React.memo(App);