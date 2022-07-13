import React, { useState } from "react";
import {useDispatch } from 'react-redux'
import {deleteCard} from "../../redux/listsSlice";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CompanyCard = (props) => {
  const [style, setStyle] = useState({ display: "none" });
  const dispatch = useDispatch();
  function deleCard() {
    const indexOfList = props.indexOfList;
    const indexOfCard = props.indexOfCard;
    dispatch(deleteCard({indexOfList, indexOfCard}));                            
  }
  return (
    <Card
      className="card"
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <Card.Body>
        <Card.Title>{props.role}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.companyName}
        </Card.Subtitle>
        <button className="deleteCard" style={style} onClick={deleCard}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
