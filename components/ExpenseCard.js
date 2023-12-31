import { Text, View, StyleSheet, Pressable } from "react-native";
import COLORS from "../globalStyles/colors";


function ExpenseCard({ purchaseDate, purchaseName, purchasePrice, onPress }) {


    return (
        <Pressable onPress={onPress}>
            <View style={styles.root}>
                <View>
                    <Text style={styles.itemName}>{purchaseName}</Text>
                    <Text style={styles.purchaseDate}>{purchaseDate}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.itemPrice}>{purchasePrice}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseCard;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        padding: 10,
    },
    itemName: {
        color: COLORS.offWhite,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    purchaseDate: {
        color: COLORS.offWhite
    },
    priceContainer: {
        
    },
    itemPrice: {
        color: COLORS.primary,
        fontWeight: 'bold',
        backgroundColor: COLORS.offWhite,
        padding: 10,
        borderRadius: 8,
        // this overflow hidden let the borderRadius appear on IOS
        overflow: 'hidden'
    }
})