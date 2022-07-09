import react from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ListContainer from "./components/listContainer/ListContainer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {newList} from "./redux/listsSlice";
function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  function addNewList(){
    console.log("I got clicked")
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
              cardsList={list.cardsList}
            />
          ))}

          <div className="listContainer">
            <span onClick={addNewList} className="add-list-block">+ Add list</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
