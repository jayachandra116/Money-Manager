import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalContent = {
  title: string | null;
  body: React.ReactNode | null;
};

type modalState = {
  isOpen: boolean;
  content: ModalContent;
};

const initialState: modalState = {
  isOpen: false,
  content: {
    body: null,
    title: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalContent>) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = {
        title: null,
        body: null,
      };
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
