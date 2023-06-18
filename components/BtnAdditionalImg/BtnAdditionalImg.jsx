import { Image, TouchableOpacity, StyleSheet } from "react-native";

export const BtnAdditionalImg = ({source, styleBtn, styleImg}) => <TouchableOpacity
    style={{...styles.button, ...styleBtn}}
    activeOpacity={0.8}
>
    <Image
        source={source}
        style={{...styleImg}}
    />
</TouchableOpacity>;

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
});