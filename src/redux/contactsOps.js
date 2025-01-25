import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// 1
axios.defaults.baseURL = "https://6794a898aad755a134ea0e4b.mockapi.io";
// 2 next contactlist
export const fetchContacts = createAsyncThunk(
"contacts/fetchAll", 
async(_, thunkAPI) => {
    try {
        const {data} = await axios.get("/contacts");
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// 7 как и 2, кнопка в контактформ 92,26  и заменить импорт там и в епп, next контслайс 8
export const addContact = createAsyncThunk(
    "contacts/addContact", 
    async(body, thunkAPI) => {
        try {
            const {data} = await axios.post("contacts", body);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

    // 9 замена импорт в контакт.дж
    export const deleteContact = createAsyncThunk(
        "contacts/deleteContact", 
        async(id, thunkAPI) => {
            try {
                const {data} = await axios.delete(`/contacts/${id}`);
                return data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        });
    // fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".

    // addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".

    // deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".