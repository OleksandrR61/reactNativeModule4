import { Image, Dimension, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const PostImage = ({source, style}) => <Image source={source} style={{...styles.img, ...style}}/>

const styles = StyleSheet.create({
    img: {
        marginBottom: 8,
        resizeMode: "cover",
        borderRadius: 8,
        overflow: "hidden",
        width: windowWidth - 32,
        height: 240,
    },
})