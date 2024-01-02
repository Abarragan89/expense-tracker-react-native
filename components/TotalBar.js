import { Text, View, StyleSheet } from "react-native";
import COLORS from "../globalStyles/colors";

function TotalBar({ text, expenses }) {

    const totalAmount = expenses.reduce((sum, expense) => {
        return sum + expense.purchasePrice;
    }, 0)

    return (
        <View style={styles.root}>
            <Text>{text}</Text>
            <Text style={styles.price}>${totalAmount.toFixed(2)}</Text>
        </View>
    )
}

export default TotalBar;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.dimWhite,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 8
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})