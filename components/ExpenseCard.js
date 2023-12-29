import { Text, View, StyleSheet, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import COLORS from "../globalStyles/colors";

function ExpenseCard({ onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.root}>
                <View>
                    <Text style={styles.itemName}>A book</Text>
                    <Text style={styles.purchaseDate}>2022-10-23</Text>
                </View>
                <Text style={styles.itemPrice}>14.99</Text>
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
    itemPrice: {
        color: COLORS.primary,
        fontWeight: 'bold',
        backgroundColor: COLORS.offWhite,
        padding: 10,
        borderRadius: 8
    }
})