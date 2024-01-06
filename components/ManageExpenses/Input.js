import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../globalStyles/colors";

function Input({ label, style, textInputConfig, invalid }) {

    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiLine)
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel ]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },

    label: {
        fontSize: 14,
        color: COLORS.offWhite,
        marginBottom: 4
    },
    input: {
        backgroundColor: COLORS.offWhite,
        color: COLORS.primary,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiLine: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: 'red'
    },
    invalidInput: {
        backgroundColor: '#8a10107e'
    }
})
