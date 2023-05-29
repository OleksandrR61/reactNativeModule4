import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const BtnAdditional = ({style = {}, children, onPress}) => <TouchableOpacity style={{...style}}>
    <Text style={styles.btnText} onPress={onPress}>{children}</Text>
</TouchableOpacity>;

const styles = StyleSheet.create({
    btnText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },
});