import { View, StyleSheet, FlatList } from "react-native";
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import TotalBar from "../components/TotalBar";
import COLORS from "../globalStyles/colors";
import { getDateMinusDays, getFormattedDate } from "./utils/date";
import ExpenseCard from "../components/ExpenseCard";
import { fetchExpenses } from "./utils/http";
import { setExpenses } from "../redux/purchases";
import LoadingOverLay from "../components/UI/LoadingOverlay";
import ErrorOverLay from "../components/UI/ErrorOverlay";

function RecentExpensesScreen({ navigation }) {
    const [isFetching, setIsFetching] = useState(true);
    const dispatch = useDispatch();

    const [error, setError] = useState();

    const [filteredData, setFilteredData] = useState([])

    // Redux
    let data = useSelector((state) => state.purchases.purchases)

    useMemo(() => {
        setFilteredData(data.filter((expense) => {
            const today = new Date();
            const date7DaysAgo = getDateMinusDays(today, 7);
            const purchaseDate = new Date(expense.purchaseDate)
            return purchaseDate > date7DaysAgo;
        }))
    }, [data])

    //fetching data from backend
    useEffect(() => {
        async function getExpenses() {
            try {
                const expenses = await fetchExpenses();
                dispatch(setExpenses(expenses))
            } catch(error) {
                console.log(error)
                setError('Could not fetch expenses!')
            }
            setIsFetching(false)
        }
        // fake loading time
        getExpenses()
        
    }, [])

    function renderFlatList({ item }) {
        function handleSinglePurchaseView() {
            navigation.navigate('ManageExpense', {
                purchaseData: item
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

    function errorHandler() {
        setError(null)
    }

    if (error && !isFetching) {
        return <ErrorOverLay message={error} onConfirm={errorHandler}/>
    }
    
    if (isFetching) {
        return <LoadingOverLay />
    }

    return (
        <>
            <View style={styles.root}>
                <TotalBar
                    text="Last 7 days"
                    expenses={filteredData}
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
        backgroundColor: COLORS.primary,
    }
})