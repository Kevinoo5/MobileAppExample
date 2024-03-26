import React, { useState } from "react";
import { TextInput, View, Text, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({ label, placeholder, isPassword, value, onChangeText, type, style, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === "picker" ? (
                <Pressable onPress={() => setIsPickerModalVisible(true)} style={styles.inputContainer}>
                    <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                    <Image source={require("../../assets/arrow.png")} style={styles.arrow}/>
                </Pressable>
            ) : (
            <View style={styles.inputContainer}>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} {...props} />
            { isPassword ? (
            <Pressable onPress={onEyePress}>
                <Image style={styles.eye} source={isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} />
            </Pressable> ) : null }
            </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setIsPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text>Select options</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

export default Input;