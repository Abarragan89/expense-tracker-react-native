import { View, StyleSheet, FlatList, Text } from "react-native";
import { useLayoutEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import TotalBar from "../components/TotalBar";
import data from "../data/purchases";
import COLORS from "../globalStyles/colors";
import ExpenseCard from "../components/ExpenseCard";

function RecentExpensesScreen({ navigation }) {

    // set up header button
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => 
                <Ionicons 
                    name="add" 
                    color={COLORS.offWhite} 
                    size={32}
                    onPress={() => {
                        navigation.navigate('AddPurchase')
                    }}
                />
        })
    }, [navigation])

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
                    text="Last 7 days"
                    amount={29.32} 
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

export default RecentExpensesScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})