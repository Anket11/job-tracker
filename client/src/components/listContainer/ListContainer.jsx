import { React, useState } from "react";
import ListTitle from "./ListTitle";
import CompanyCard from "./CompanyCard";
import InputModal from "./InputModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./listContainer.css";

const ListContainer = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="listContainer ">
      <ListTitle index={props.index} listName={props.listName} jobCount={props.cardList.length} />

      <button className="addCardBtn" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>

      <InputModal show={modalShow} index={props.index} onHide={() => setModalShow(false)} />

      <div className="cardList">
        {props.cardList.map((card, index) => (
          <CompanyCard
            key={index}
            indexOfList={props.index}
            indexOfCard = {index}
            role={card.role}
            companyName={card.companyName}
          />
        ))}
        {/* <CompanyCard role={props.cardsList[0].role} /> */}
      </div>
    </div>
  );
};

export default ListContainer;
