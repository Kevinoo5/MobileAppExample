import React from "react";
import {Text, View, Image, Pressable} from "react-native";
import Button from "../../../components/Button";
import {styles} from "./styles";

const Splash = ({navigation}) => {
    console.log("navigation => ",navigation);

    const onSignUp = () => {
        navigation.navigate("Signup");
    };

    const onSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
        <View style={styles.container}>
            <Image
            resizeMode="contain"
            source={require("../../../assets/splash_image.png")}
            style={styles.image}
            />

            <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}> All you need </Text> 
            <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign Up" onPress={onSignUp} />

            <Pressable hitSlop={20} onPress={onSignIn}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>

        </View>
    );
}

export default React.memo(Splash);