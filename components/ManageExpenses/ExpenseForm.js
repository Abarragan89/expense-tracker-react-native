import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input from "./Input";
import PrimaryBtn from "../PrimaryBtn";


function ExpenseForm({ onCancel, confirmHandler, purchaseData }) {

    const [inputs, setInputs] = useState({
        amount: {
            value: purchaseData ? purchaseData.purchasePrice.toFixed(2).toString() : '',
            // isValid: purchaseData ? true : false
            isValid: true
        },
        date: {
            value: purchaseData ? new Date(purchaseData.purchaseDate).toISOString() : '',
            // isValid: purchaseData ? true : false,
            isValid: true

        },
        description: {
            value: purchaseData ? purchaseData.purchaseName : '',
            // isValid: purchaseData ? true : false,
            isValid: true,

        }
    });

    // 'enteredAmount' will automatically be given to use by react native
    // we don't need to use e.target. The first parameter is ours
    function amountChangedHandler(inputIdentifier, enteredAmount) {
        setInputs((currentValues) => {
            return {
                ...currentValues,
                [inputIdentifier]: { value: enteredAmount, isValid: true }
            }
        })
    }

    function submitHandler() {

        // Validation 
        const amountIsValid = !isNaN(+inputs.amount.value) && inputs.amount.value > 0;
        const dateIsValid = new Date(inputs.date.value).toString() !== 'Invalid Date';
        const descriptionIsValid = inputs.description.value.trim().length > 0;


        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountIsValid },
                    date: { value: currentInputs.date.value, isValid: dateIsValid },
                    description: { value: currentInputs.description.value, isValid: descriptionIsValid }
                }
            })
            return;
        };

        // create new expense
        const expenseData = {
            purchasePrice: +inputs.amount.value,
            purchaseDate: new Date(inputs.date.value).getTime(),
            purchaseName: inputs.description.value
        }
        confirmHandler(expenseData)
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Your Expense</Text>

            <View style={styles.amountDateContainer}>
                <Input label="Amount"
                    style={styles.rowInput}
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: amountChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}
                />
                <Input label="Date"
                    style={styles.rowInput}
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        keyboardType: "decimal-pad",
                        maxLength: 10,
                        onChangeText: amountChangedHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}
                />
            </View>
            <Input label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: amountChangedHandler.bind(this, 'description'),
                    value: inputs.description.value
                    // autoCapitalize: 'none',
                    // autoCorrect: false // default is true
                }} />

            {formIsInvalid && <Text style={styles.errorText}>Invalid Input</Text>}
            <View style={styles.btnContainer}>
                <PrimaryBtn
                    text='Cancel'
                    onPress={onCancel}
                />
                <PrimaryBtn
                    text={purchaseData ? 'Update' : 'Add'}
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
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 16
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
        width: '100%'
    },
})