import  { useEffect } from "react";
import axios from "axios";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ListContainer from "./components/listContainer/ListContainer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { newList, storeData } from "./redux/listsSlice";
function App() {
  const dispatch = useDispatch();
  const getData = () => {
    console.log("Called to server");
    axios.get(`http://localhost:5500/api/`).then((response) => {
      dispatch(storeData(response.data));
    });
  };
  useEffect(getData, [dispatch]);
  const lists = useSelector((state) => state.lists);
  // console.log(lists);

  function addNewList() {
    console.log("I got clicked");
    dispatch(newList());
  }
  return (
    <div className="everything">
      <SideNav />
      <div className="boardworkspace">
        <Header />
        <div className="board">
          {lists.map((list, index) => (
            <ListContainer
              key={index}
              index={index}
              listName={list.listName}
              cardList={list.cardList}
            />
          ))}

          <div className="listContainer">
            <span onClick={addNewList} className="add-list-block">
              + Add list
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
