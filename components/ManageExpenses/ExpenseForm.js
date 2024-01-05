import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "./Input";
import PrimaryBtn from "../PrimaryBtn";


function ExpenseForm({ onCancel, updateHandler, isEditing }) {

    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    // 'enteredAmount' will automatically be given to use by react native
    // we don't need to use e.target. The first parameter is ours
    function amountChangedHandler(inputIdentifier, enteredAmount) {
        setInputValues((currentValues) => {
            return {
                ...currentValues,
                [inputIdentifier]: enteredAmount
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            id: Math.random(),
            purchasePrice: parseInt(inputValues.amount),
            purchaseDate: new Date(inputValues.date).toString(),
            purchaseName: inputValues.description
        }
        updateHandler(expenseData)
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Your Expense</Text>

            <View style={styles.amountDateContainer}>
                <Input label="Amount" style={styles.rowInput} textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }} />
                <Input label="Date" style={styles.rowInput} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    keyboardType: "decimal-pad",
                    maxLength: 10,
                    onChangeText: amountChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText: amountChangedHandler.bind(this, 'description'),
                value: inputValues.description
                // autoCapitalize: 'none',
                // autoCorrect: false // default is true
            }} />
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={onCancel}
                />
                <PrimaryBtn
                    text={isEditing ? 'Update' : 'Add'}
                    onPress={submitHandler}
                    bgColor={COLORS.secondary}
                />
            </View>
        </View>
    )
};

export default ExpenseForm;

const styles = StyleSheet.create({
    root: {
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 16
    },
    amountDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
        width: '100%'
    },
})