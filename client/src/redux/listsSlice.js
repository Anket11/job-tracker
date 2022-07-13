import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    storeData: (state = initialState, action) => {
      // console.log(current(state));
      return action.payload;
    },
    addCard: (state = initialState, action) => {
      console.log(current(state));
      // console.log(action.payload);
      // console.log(current(state[action.payload.idx].cardList));
      const newCard = {
        role: action.payload.jobTitle,
        companyName: action.payload.company,
      };
      axios
        .post(
          `http://localhost:5500/api/` + state[action.payload.idx]._id,
          newCard
        )
        .then((response) => {
          console.log(response.status);
        });
      state[action.payload.idx].cardList.push(newCard);
      return state;
    },
    deleteCard: (state = initialState, action) => {
      let newCardList = state[action.payload.indexOfList].cardList;
      console.log(current(newCardList));
      console.log(action.payload.indexOfCard);
      axios
        .delete(
          `http://localhost:5500/api/` +
            state[action.payload.indexOfList]._id +
            "/" +
            newCardList[action.payload.indexOfCard]
              ._id
        )
        .then((response) => {
          console.log(response.status);
        });
      newCardList.splice(action.payload.indexOfCard, 1);
    },
    newList: (state = initialState, action) => {
      console.log(current(state));
      axios
        .post(
          `http://localhost:5500/api/`
        )
        .then((response) => {
          console.log(response.status);
        });
      state.push({
        listName: "List Name",
        cardList: [],
      });
    },
    deleteList: (state = initialState, action) => {
      console.log(current(state[action.payload]));
      axios
        .delete(
          `http://localhost:5500/api/` +
            state[action.payload]._id
        )
        .then((response) => {
          console.log(response.status);
        });
      return state.filter((item, index) => index !== action.payload);
    },
    editListName: (state = initialState, action) => {
      // console.log(current(state));
      // console.log(action.payload);
      state[action.payload.index].listName = action.payload.title;
      axios
        .put(
          `http://localhost:5500/api/` + state[action.payload.index]._id,
          state[action.payload.index]
        )
        .then((response) => {
          console.log(response.status);
        });
      console.log(current(state[action.payload.index]))

    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeData,
  addCard,
  deleteCard,
  newList,
  deleteList,
  editListName,
} = listsSlice.actions;

export default listsSlice.reducer;
