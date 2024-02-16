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

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
        <AuthHeader title="Sign Up" onBackPress={onBack} />
        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**********" />
        <View style={styles.agreeRow}>
            <Checkbox checked={checked} onCheck={setChecked} />
            <Text style={styles.agreeText}>I agree with the <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign In" />
        <Separator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>Already have an account?
            <Text style={styles.footerLink}> Sign In</Text>
        </Text>
        </View>
        </SafeAreaView>
    );
}

export default Signup;