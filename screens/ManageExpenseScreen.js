
import { View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import COLORS from "../globalStyles/colors";
import { useDispatch } from 'react-redux';
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { removePurchase, updatePurchase, addPurchase } from "../redux/purchases";
import { useLayoutEffect, useState } from "react";
import { storeExpense, updateExpense, deleteExpense} from "./utils/http";
import LoadingOverLay from "../components/UI/LoadingOverlay";
import ErrorOverLay from "../components/UI/ErrorOverlay";

function ManageExpenseScreen({ route, navigation }) {

    const [isConfirming, setIsConfirming] = useState(false)
    const [error, setError] = useState()

    const purchaseData = route.params?.purchaseData
    const editedExpenseId = purchaseData?.id
    const isEditing = !!purchaseData

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])

    const dispatch = useDispatch();


    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        // we don't have to set this back to false because  we goBack();
        setIsConfirming(true)
        if (isEditing) {
            try {
                await updateExpense(editedExpenseId, expenseData)
                dispatch(updatePurchase({ editedExpenseId, expenseData }))
            } catch(error) {
                setError('Failed to update expense. Please try again.')
            }
        } else {
            try {
                const id = await storeExpense(expenseData)
                dispatch(addPurchase({...expenseData, id: id }))
            } catch(error) {
                setError('Failed to add expense. Please try again')
            }
        }
        navigation.goBack();
    }

    async function deleteHandler() {
        setIsConfirming(true)
        try {
            await deleteExpense(editedExpenseId)
            dispatch(removePurchase({ id: editedExpenseId }))
            navigation.goBack();
        } catch(error) {
            setError('Could not delete expense. Please try again.')
            setIsConfirming(false)
        }
    }

    if (isConfirming) {
        return <LoadingOverLay />
    }

    if (error) {
        return <ErrorOverLay message={error} onConfirm={cancelHandler}/>
    }

    return (
        <View style={styles.root}>
            <View style={styles.purchaseInfoContainer}>
                <ExpenseForm
                    onCancel={cancelHandler}
                    confirmHandler={confirmHandler}
                    purchaseData={purchaseData}
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