import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const InnerContainer = ({children}) => <View style={styles.innerContainer}>
    <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
        {children}
    </KeyboardAwareScrollView>
</View>;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});