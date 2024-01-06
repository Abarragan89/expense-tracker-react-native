import { createSlice } from '@reduxjs/toolkit';

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        purchases: [
            {
                "id": 20,
                "purchaseDate": "2023-12-20T12:53:29.000Z",
                "purchaseName": "product #20",
                "purchasePrice": 4
            },
            {
                "id": 21,
                "purchaseDate": "2023-12-21T12:53:29.000Z",
                "purchaseName": "product #21",
                "purchasePrice": 7
            },
            {
                "id": 22,
                "purchaseDate": "2023-12-22T12:53:29.000Z",
                "purchaseName": "product #22",
                "purchasePrice": 0
            },
            {
                "id": 23,
                "purchaseDate": "2023-12-23T12:53:29.000Z",
                "purchaseName": "product #23",
                "purchasePrice": 26
            },
            {
                "id": 24,
                "purchaseDate": "2023-12-24T12:53:29.000Z",
                "purchaseName": "product #24",
                "purchasePrice": 20
            },
            {
                "id": 25,
                "purchaseDate": "2023-12-25T12:53:29.000Z",
                "purchaseName": "product #25",
                "purchasePrice": 13
            },
            {
                "id": 26,
                "purchaseDate": "2023-12-26T12:53:29.000Z",
                "purchaseName": "product #26",
                "purchasePrice": 12
            },
            {
                "id": 27,
                "purchaseDate": "2023-12-27T12:53:29.000Z",
                "purchaseName": "product #27",
                "purchasePrice": 28
            },
            {
                "id": 28,
                "purchaseDate": "2023-12-28T12:53:29.000Z",
                "purchaseName": "product #28",
                "purchasePrice": 1
            },
            {
                "id": 29,
                "purchaseDate": "2023-12-29T12:53:29.000Z",
                "purchaseName": "product #29",
                "purchasePrice": 17
            },
            {
                "id": 30,
                "purchaseDate": "2023-12-30T12:53:29.000Z",
                "purchaseName": "product #30",
                "purchasePrice": 8
            },
            {
                "id": 31,
                "purchaseDate": "2023-12-31T12:53:29.000Z",
                "purchaseName": "product #31",
                "purchasePrice": 17
            }
        ]
    },
    reducers: {
        addPurchase: (state, action) => {
            const id = new Date().toString() + Math.random().toString();
            const newPurchase = {...action.payload, id: id}
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

export const { addPurchase, removePurchase, updatePurchase } = purchasesSlice.actions

export default purchasesSlice.reducer;