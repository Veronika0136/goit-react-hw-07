import { createSlice, isAnyOf, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps';
import { selectNameFilter } from '../redux/filtersSlice';

// const handlePending = state => {
//   state.loading = true;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: "id-2'", name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: "id-4'", name: 'Annie Copeland', number: '227-91-26' },
    ],
    loading: false,
    error: null,
  },

  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.loading = false;
        state.error = null;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

// export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
