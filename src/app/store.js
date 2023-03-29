import { configureStore } from '@reduxjs/toolkit'
import bucketSlice from '../features/bucketSlice.js';
import toggleSlice from "../features/toggleSlice.js";
import historySlice from '../features/historySlice.js';

const store = configureStore({
    reducer: {
        buckets : bucketSlice,
        toggle: toggleSlice,
        history: historySlice,
    }
});

export default store