import axios from 'axios';

const ROOTURL = 'https://react-native-expense-tra-5bea0-default-rtdb.firebaseio.com'

export async function storeExpense(expenseData) {
    const response = await axios.post(`${ROOTURL}/expenses.json`, expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(`${ROOTURL}/expenses.json`)
    const expenses = [];
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            purchasePrice: response.data[key].purchasePrice,
            purchaseDate: new Date(response.data[key].purchaseDate).getTime(),
            purchaseName: response.data[key].purchaseName
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense(id, expenseData) {
    // we don't need to make this async because we are returning the Promise
    return axios.put(`${ROOTURL}/expenses/${id}.json`, expenseData)
}

export function deleteExpense(id) {
    // we don't need to make this async because we are returning the Promise
    return axios.delete(`${ROOTURL}/expenses/${id}.json`)
}