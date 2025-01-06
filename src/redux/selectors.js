export const selectContacts = (state) => state.contacts.items;

export const selectStatusFilter = (state) => state.filters.name;

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectRefreshUser = (state) => state.auth.isRefreshUser;

export const selectOpenModale = (state) => state.modaleDelete.isOpenModale;

export const selectContactId = (state) => state.modaleDelete.contactId;
