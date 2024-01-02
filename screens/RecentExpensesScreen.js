import { View, StyleSheet, FlatList, Text } from "react-native";
import { useLayoutEffect, useMemo } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import TotalBar from "../components/TotalBar";
import COLORS from "../globalStyles/colors";
import { getDateMinusDays, getFormattedDate } from "./utils/date";
import ExpenseCard from "../components/ExpenseCard";

function RecentExpensesScreen({ navigation }) {

    let data = useSelector((state) => state.purchases.purchases)

    let filteredData;

    useMemo(() => {
        filteredData = data.filter((expense) => {
            const today = new Date();
            const date7DaysAgo = getDateMinusDays(today, 7);
            const purchaseDate = new Date(expense.purchaseDate)
            return purchaseDate > date7DaysAgo;
        })
    }, [data])

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
                    text="Last 7 days"
                    expenses={data} 
                />
                <FlatList
                    data={filteredData}
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