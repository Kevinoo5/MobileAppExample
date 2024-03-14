import React from "react";
import { Image, Text, ScrollView, View, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { styles } from "./styles";
import ImageCarousel from "../../components/ImageCarousel";

const ProductDetails = ({navigation, route}) => {
    const { product } = route.params || {}

    onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        // phone call
        let phone = "phone number"
        Linking.openURL(`tel:${phone}`)

        // email
        let email = "email"
        Linking.openURL(`mailto:${email}`)
    }

    return (
    <SafeAreaView style={styles.save}>
        <ScrollView>
        {product?.images?.length ? (
                <ImageCarousel images={product.images} />
            ) : (
                <Image style={styles.image} source={{uri: product.image}} />
            )}

        <View style={styles.content}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.price}>{product?.price}</Text>
            <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable style={styles.backContainer} onPress={onBackPress}>
            <Image style={styles.backIcon} source={require("../../assets/back.png")}/>
        </Pressable>
        </ScrollView>
        <View style={styles.footer}>
            <Pressable style={styles.bookmarkContainer}>
            <Image style={styles.bookmark} source={require("../../assets/tabs/bookmark.png")}/>
            </Pressable>

       <Button onPress={onContact} title="Contact Seller" />
        </View>
    </SafeAreaView>
    );
}

export default React.memo(ProductDetails);