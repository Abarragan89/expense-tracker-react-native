import { Text, View, Pressable, StyleSheet } from 'react-native';
import COLORS from '../globalStyles/colors';

function PrimaryBtn({ text, onPress, bgColor = COLORS.primary, textColor = COLORS.offWhite }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Text style={[styles.btnText, { backgroundColor: bgColor }, { color: textColor }]}>{text}</Text>
        </Pressable>
    )
}

export default PrimaryBtn;

const styles = StyleSheet.create({
    btnText: {
        color: COLORS.offWhite,
        paddingHorizontal: 38,
        paddingVertical: 9,
        borderRadius: 4,
    },
    pressed: {
        opacity: .8
    }
})

