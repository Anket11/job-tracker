import React, { useState,useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagicWandSparkles,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteList, editListName } from "../../redux/listsSlice";

const ListTitle = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.listName);
  const ref = useRef(null);

  function handleTitle(event) {
    const newValue = event.target.value;
    setTitle(newValue);
  }

  function delList(index) {
    dispatch(deleteList(index));
    console.log(index);
  }
  function handleEnter(event) {
    if (event.key == "Enter") {
      setTitle(event.target.value);
      if (title !== props.listName) {
        console.log("dispatch of enter should work");
        const index = props.index;
        dispatch(editListName({ index, title }));
      }
    }
  }
  return (
    <div className="listTitle">
      <FontAwesomeIcon
        className="headingIcon"
        icon={faMagicWandSparkles}
        size="lg"
      />
      <div className="titleContent">
        <input
        ref={ref}
          onChange={handleTitle}
          onKeyDown={handleEnter}
          onBlur={() => {
            if (title !== props.listName) {
              const index = props.index;
              console.log("dispatch of focus out should work");
              dispatch(editListName({ index, title }));
            }
          }}
          type="text"
          placeholder="List Name"
          className="heading"
          value={title}
        ></input>

        <p className="jobCount">{props.jobCount} Jobs</p>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
          <FontAwesomeIcon className="moreIcon" icon={faEllipsis} size="xl" />
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
        <Dropdown.Item
          as="button"
          onClick={() => {
            ref.current.focus()
          }}
        >
          Rename
        </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => delList(props.index)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ListTitle;
