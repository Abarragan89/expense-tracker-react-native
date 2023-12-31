import { View, StyleSheet, FlatList } from "react-native";
import TotalBar from "../components/TotalBar";
import data from "../data/purchases";
import COLORS from "../globalStyles/colors";
import ExpenseCard from "../components/ExpenseCard";

function AllExpensesScreen({ navigation }) {

    function renderFlatList({ item }) {

        function handleSinglePurchaseView() {
            navigation.navigate('SinglePurchase', {
                purchaseId: item.id
            })
        }
        return (
            <ExpenseCard 
                purchaseId={item.id}
                purchaseDate={item.purchaseDate.toLocaleString()}
                purchaseName={item.purchaseName}
                purchasePrice={item.purchasePrice}
                onPress={handleSinglePurchaseView}

            />
        )

    }

    return (
        <>
            <View style={styles.root}>
                <TotalBar 
                    text="Total"
                    amount={229.32}  
                />
                <FlatList
                    data={data}
                    renderItem={renderFlatList}
                    keyExtractor={(itemData) => itemData.id}
                />
            </View>
        </>
    )
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})