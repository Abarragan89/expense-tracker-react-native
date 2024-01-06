import { createSlice } from '@reduxjs/toolkit';

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        purchases: []
    },
    reducers: {
        setExpenses: (state, action) => {
            state.purchases.push(...action.payload)
        },

        addPurchase: (state, action) => {
            const newPurchase = {...action.payload }
            state.purchases.push(newPurchase)
        },

        removePurchase: (state, action) => {
            const purchaseIndex = state.purchases.findIndex(purchase => purchase.id === action.payload.id)
            state.purchases.splice(purchaseIndex, 1);
        },

        updatePurchase: (state, action) => {
            const purchaseIndex = state.purchases.findIndex(purchase => purchase.id === action.payload.editedExpenseId)
            const updatableExpense = state.purchases[purchaseIndex];
            const updateItem = { ...updatableExpense, ...action.payload.expenseData};
            state.purchases[purchaseIndex] = updateItem
        }
    }
})

export const { addPurchase, removePurchase, updatePurchase, setExpenses } = purchasesSlice.actions

export default purchasesSlice.reducer;