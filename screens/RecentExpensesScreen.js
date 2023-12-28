import { Text, View, StyleSheet } from "react-native";
import TotalBar from "../components/TotalBar"
import COLORS from "../globalStyles/colors";

function RecentExpensesScreen() {
    return (
        <>
            <View style={styles.root}>
                <TotalBar />
                <Text>Recent Expenses</Text>
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