
import { View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import COLORS from "../globalStyles/colors";
import { useDispatch } from 'react-redux';
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { removePurchase, updatePurchase, addPurchase } from "../redux/purchases";
import { useLayoutEffect } from "react";


function ManageExpenseScreen({ route, navigation }) {
    const editedExpenseId = route.params?.purchaseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])

    const dispatch = useDispatch();


    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            dispatch(updatePurchase({ editedExpenseId, expenseData} ))
        } else {
            dispatch(addPurchase(expenseData))
        }
        navigation.goBack();
    }

    console.log(editedExpenseId)

    function deleteHandler() {
        navigation.goBack();
        dispatch(removePurchase({ id: purchaseId }))
    }

    return (
        <View style={styles.root}>
            <View style={styles.purchaseInfoContainer}>
                <ExpenseForm 
                    onCancel={cancelHandler}
                    updateHandler={confirmHandler}
                    isEditing={isEditing}
                />
            </View>
            {isEditing &&
            <Ionicons onPress={deleteHandler} name='trash' style={styles.trashIcon} />
            }
        </View>
    )
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: COLORS.primary
    },
    trashIcon: {
        marginTop: 16,
        color: 'red',
        fontSize: 40,
        opacity: .7
    }
})