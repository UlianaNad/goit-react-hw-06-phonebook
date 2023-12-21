import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state = state.filter((contact) => contact.id !== action.payload);
      return state;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
