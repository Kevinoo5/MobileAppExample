import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem"
import Button from "../../../components/Button"
import { styles } from "./styles"

const Profile = (navigation) => {
    const num = 10

    const onLogout = async () => {
        console.log('logout was clicked')
    }

    const onSettingsPress= () =>{
        navigation.navigate('Settings')
    }

    const onNewListingPress = () =>{
        navigation.navigate('CreateListing')
    } 
    
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>

                    <ListItem title="My listings" subtitle={`Already have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
                </View>
                <Button title="Add New Listing" />
            </View>
        </SafeAreaView> 
    )
}
export default React.memo(Profile)