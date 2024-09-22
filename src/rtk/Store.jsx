import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./Reducer";

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { Alert } from "react-native";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const storeData = async (key, value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue)
    }
    catch({message}) {
        Alert.alert(message)
    }
}

export const getData = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    }
    catch({message}) {
        Alert.alert(message)
    }
}

export const persistor = persistStore(store)


