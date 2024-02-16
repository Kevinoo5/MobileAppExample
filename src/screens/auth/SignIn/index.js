import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button"
import Separator from "../../../components/Separator";
import { styles } from "./styles";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = ({navigation}) => {
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={onBack} />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**********" />
        <Button style={styles.button} title="Sign In" />
        <Separator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>Don't have an account?
            <Text style={styles.footerLink}> Sign Up</Text>
        </Text>
        </View>
        </SafeAreaView>
    );
}

export default SignIn;