import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  {
    listName: "WishList",
    cardsList: [
      {
        role: "SDE 1",
        companyName: "Google",
      },
      {
        role: "SDE 2",
        companyName: "Google",
      },
      {
        role: "SDE 3",
        companyName: "Google",
      },
      {
        role: "SDE 4",
        companyName: "Google",
      },
      {
        role: "SDE 5",
        companyName: "Google",
      },
    ],
  },
  {
    listName: "Applied",
    cardsList: [
      {
        role: "SDE 5",
        companyName: "Amazon",
      },
      {
        role: "SDE 6",
        companyName: "Amazon",
      },
      {
        role: "SDE 7",
        companyName: "Amazon",
      },
      {
        role: "SDE 8",
        companyName: "Amazon",
      },
    ],
  },
  {
    listName: "Interview",
    cardsList: [
      {
        role: "SDE 9",
        companyName: "Google",
      },
      {
        role: "SDE 10",
        companyName: "Google",
      },
      {
        role: "SDE 11",
        companyName: "Google",
      },
      {
        role: "SDE 12",
        companyName: "Google",
      },
      {
        role: "SDE 13",
        companyName: "Google",
      },
      {
        role: "SDE 9",
        companyName: "Google",
      },
      {
        role: "SDE 10",
        companyName: "Google",
      },
      {
        role: "SDE 11",
        companyName: "Google",
      },
      {
        role: "SDE 12",
        companyName: "Google",
      },
      {
        role: "SDE 13",
        companyName: "Google",
      },
    ],
  },
];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addCard: (state = initialState, action) => {
      console.log(current(state));
      console.log(action.payload);
      console.log(current(state[action.payload.idx].cardsList));

      state[action.payload.idx].cardsList.push({
        role: action.payload.jobTitle,
        companyName: action.payload.company,
      });
      return state;
    },
    deleteCard: (state = initialState, action) => {
      let newCardList = state[action.payload.indexOfList].cardsList;
      console.log(current(newCardList));
      console.log(action.payload.indexOfCard);
      newCardList.splice(action.payload.indexOfCard, 1);
      // return newCardList;
      // state = (newCardList.filter((item,index) => index!==action.payload.indexOfCard));

      // newCardList = [...newCardList.slice(0, action.payload.indexOfCard), ...newCardList.slice(action.payload.indexOfCard)];
      // console.log(current(state))
    },
    newList: (state = initialState, action) => {
      console.log(current(state));
      state.push({
        listName: "List Name",
        cardsList: [],
      });
    },
    deleteList: (state = initialState, action) => {
      console.log(current(state[action.payload]));
      return state.filter((item, index) => index !== action.payload);
    },
    editListName: (state = initialState, action) => {
      console.log(current(state));
      console.log(action.payload);
      state[action.payload.index].listName = action.payload.title;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCard, deleteCard, newList, deleteList, editListName } = listsSlice.actions;

export default listsSlice.reducer;
