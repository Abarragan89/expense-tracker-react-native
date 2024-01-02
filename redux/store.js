import { configureStore } from '@reduxjs/toolkit';
import purchases from './purchases';


export const store = configureStore({
    reducer: {
        purchases
    }
})