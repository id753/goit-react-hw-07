import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

// базовая структура
const initialState = {
  items: [],
  // 1
  isLoading: false,
  isError: false,
};

// базовая структура
const sliceContacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // 
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(
    //     (contact) => contact.id !== action.payload
    //   );
    // },

    // 1 экшены затем экспорт
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },

// 4 n cont list 5
extraReducers: (builder) => {
  builder
  .addCase(fetchContacts.fulfilled, (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  })
  .addCase(fetchContacts.rejected, (state, action) => {
    state.isError = action.payload;
    state.isLoading = false;
  })
  .addCase(fetchContacts.pending, (state, action) => {
    state.isLoading = true;
    state.isError = false;
  })

  // 8
.addCase(addContact.fulfilled, (state, action) => {
state.items.push(action.payload);
  })

  // 10
  .addCase(deleteContact.fulfilled, (state, action) => {
    state.items = state.items.filter(
      (item) => item.id !== action.payload.id
    );
  })

},
});

// н2 Селектор для фільтрації контактів
export const selectFilteredContacts = createSelector(
  // перший аргумент - входи селектора
  (state) => state.contacts.items,
  (state) => state.filters.name,
  (contacts, filter) => {
    // логіка фільтрації
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// базовая структура
export const contactsReducer = sliceContacts.reducer;

//
export const { 
  // addContact, 
  // deleteContact, 
  // 1
  setLoading,
  setError,
  // H3
  // setFilter 
} = sliceContacts.actions;

// экспорт селекторов в Konтактлист
export const selectIsLoading = (state) => state.isLoading;
export const selectIsError = (state) => state.isError;

