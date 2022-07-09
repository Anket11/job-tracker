import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/listsSlice";
import "./inputModal.css";

const InputModal = (props) => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const dispatch = useDispatch();

  function handleInputCompany(event) {
    const newValue = event.target.value;
    setCompany(newValue);
  }
  function handleInputJobTitle(event) {
    const newValue = event.target.value;
    setJobTitle(newValue);
  }
  function addNewCard() {
    const idx = props.index;
    dispatch(addCard({ idx, company, jobTitle }));
    setCompany("");
    setJobTitle("");
    props.onHide();
  }
  //   console.log(company);
  //   console.log(jobTitle);

  return (
    <Modal
      onKeyPress={(event) => {
        if (event.key == "Enter") {
          addNewCard();
        }
      }}
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <main className="modal-container" style={{ width: "400px" }}>
        <div className="model-header">
          <h1 title="Add Job">Add Job</h1>
        </div>
        <div className="modal-input">
          <div className="input-container">
            <div className="label-container">
              <div
                style={{ marginBottom: "7px", flexGrow: 1, display: "flex" }}
              >
                <p
                  title="Company"
                  className="input-heading"
                  style={{ flexGrow: 1 }}
                >
                  Company
                </p>
                <p
                  color="rgba(25,4,69,0.5)"
                  title="Required"
                  className="required-text"
                >
                  Required
                </p>
              </div>
            </div>

            <div style={{ transition: "all 0.4s ease-out 0s", width: "100%" }}>
              <form style={{ position: "relative" }}>
                <input
                  onChange={handleInputCompany}
                  type="text"
                  placeholder="Company"
                  value={company}
                  autoFocus
                  style={{
                    backgroundColor: "white",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    transition: "all 0.4s ease-out 0s",
                    color: "rgb(24, 0, 69)",
                    border: "1px solid rgba(25, 4, 69, 0.1)",
                    borderRadius: "4px",
                    minHeight: "40px",
                    padding: "0px 15px",
                    outline: "none",
                    margin: "0px",
                    boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                  }}
                />
              </form>
            </div>
          </div>
          <div className="input-container">
            <div className="label-container">
              <div
                style={{ marginBottom: "7px", flexGrow: 1, display: "flex" }}
              >
                <p
                  title="Job Title"
                  className="input-heading"
                  style={{ flexGrow: 1 }}
                >
                  Job Title
                </p>
                <p
                  color="rgba(25,4,69,0.5)"
                  title="Required"
                  className="required-text"
                >
                  Required
                </p>
              </div>
            </div>
            <div style={{ transition: "all 0.4s ease-out 0s" }}>
              <form style={{ position: "relative" }}>
                <input
                  onChange={handleInputJobTitle}
                  type="text"
                  placeholder="Job Title"
                  value={jobTitle}
                  style={{
                    backgroundColor: "white",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    width: "100%",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    transition: "all 0.4s ease-out 0s",
                    color: "rgb(24, 0, 69)",
                    border: "1px solid rgba(25, 4, 69, 0.1)",
                    borderRadius: "4px",
                    minHeight: "40px",
                    padding: "0px 15px",
                    outline: "none",
                    margin: "0px",
                    boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <a
            onClick={props.onHide}
            tabIndex={0}
            role="button"
            target="_blank"
            style={{
              cursor: "pointer",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 8px",
              color: "rgba(25, 4, 69, 0.7)",
              fontWeight: 600,
              borderRadius: "6px",
              letterSpacing: "0px",
              fontFamily: "Lato",
              transition: "all 0.4s ease-out 0s",
              backgroundColor: "white",
              textAlign: "center",
              fontSize: "13px",
              border: "1px solid rgba(25, 4, 69, 0.2)",
              position: "relative",
              boxShadow: "rgba(25, 4, 69, 0.05) 0px 4px 10px",
              marginRight: "7px",
              height: "28px",
            }}
          >
            Discard
          </a>
          <a
            onClick={addNewCard}
            tabIndex={0}
            role="button"
            target="_blank"
            style={{
              cursor: "pointer",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 8px",
              color: "white",
              fontWeight: 600,
              borderRadius: "6px",
              letterSpacing: "0px",
              fontFamily: "Lato",
              transition: "all 0.4s ease-out 0s",
              backgroundColor: "rgb(106, 79, 235)",
              textAlign: "center",
              fontSize: "13px",
              border: "1px solid rgba(0, 0, 0, 0)",
              position: "relative",
              boxShadow: "rgba(25, 4, 69, 0.05) 0px 4px 10px",
              height: "28px",
            }}
          >
            Save Job
          </a>
        </div>
      </main>

      {/* <Modal.Header className="modalHeader" >
        <Modal.Title id="contained-modal-title-vcenter">
          Add Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Form>
          <Form.Label className="formLabel">Company</Form.Label>
          <Form.Control
          className = "companyInput"
            onChange={handleInputCompany}
            type="text"
            placeholder="Company"
            value={company}
            autoFocus
          />
          <Form.Label className="formLabel">Job Title</Form.Label>
          <Form.Control
            onChange={handleInputJobTitle}
            type="text"
            placeholder="Job Title"
            value={jobTitle}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Discard</Button>
        <Button onClick={addNewCard}>Save</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default InputModal;
