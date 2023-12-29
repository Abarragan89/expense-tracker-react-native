import { Text, View, StyleSheet } from "react-native";
import TotalBar from "../components/TotalBar"
import COLORS from "../globalStyles/colors";
import ExpenseCard from "../components/ExpenseCard";

function RecentExpensesScreen({ navigation }) {
    function handleSinglePurchaseView() {
        navigation.navigate('SinglePurchase')
    }

    return (
        <>
            <View style={styles.root}>
                <TotalBar />
                <ExpenseCard onPress={handleSinglePurchaseView}/>
            </View>
        </>
    )
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})