import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const BtnPrime = ({children, onPress}) => <TouchableOpacity
    style={styles.btn}
    activeOpacity={0.8}
    onPress={onPress}
>
    <Text style={styles.btnText}>{children}</Text>
</TouchableOpacity>;

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },
    btnText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
    },
});