import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import TotalBar from "../components/TotalBar";
import COLORS from "../globalStyles/colors";
import ExpenseCard from "../components/ExpenseCard";
import { getFormattedDate } from "./utils/date";
import { useSelector } from 'react-redux'

function AllExpensesScreen({ navigation }) {

    const data = useSelector((state) => state.purchases.purchases)

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
            navigation.navigate('EditPurchase', {
                purchaseId: item.id
            })
        }
        return (
            <ExpenseCard 
                purchaseId={item.id}
                purchaseDate={getFormattedDate(item.purchaseDate)}
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
                    expenses={data}
                />
                <FlatList
                    data={data}
                    renderItem={renderFlatList}
                    keyExtractor={(item) => item.id}
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