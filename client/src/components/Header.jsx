import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.css";
const Header = () => {
  return (
    // <Navbar className="navbar" collapseOnSelect expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Job Tracker</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>

    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        columnGap: "10px",
        textTransform: "capitalize",
        padding: "0px 6px",
        boxSizing: "border-box",
        alignItems: "center",
        height: "45px",
        backgroundColor: "white",
        zIndex: 2,
        flexShrink: 0,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "rgb(236, 233, 242)",
      }}
    >
      <div style={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
        <div>
          <div className="left">

            <h1 title="Job Search 2022" className="nav-heading">
              Job Search 2022
            </h1>
          </div>
        </div>
        <div style={{ position: "relative", margin: "0px 10px" }}>
          <input
            name="Board Filter"
            placeholder="Filter"
            type="text"
            className="searchFilter"
          />
        </div>
      </div>
      <div
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "660px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/board"
          >
            <div
              style={{
                border: "1px solid rgba(25, 4, 69, 0.15)",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >
              <p
                color="#180045"
                title="Board"
                className="current-navbar-link"
              >
                Board
              </p>
            </div>
          </a>
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/activities/all"
          >
            <div
              style={{
                border: "1px solid transparent",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >

              <p
                color="rgba(25,4,69,0.6)"
                title="Activities"
                className="navbar-link"

              >
                Activities
              </p>
            </div>
          </a>
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/contacts"
          >
            <div
              style={{
                border: "1px solid transparent",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >

              <p
                color="rgba(25,4,69,0.6)"
                title="Contacts"
                className="navbar-link"
              >
                Contacts
              </p>
            </div>
          </a>
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/documents"
          >
            <div
              style={{
                border: "1px solid transparent",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >

              <p
                color="rgba(25,4,69,0.6)"
                title="Documents"
                className="navbar-link"
              >
                Documents
              </p>
            </div>
          </a>
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/map"
          >
            <div
              style={{
                border: "1px solid transparent",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >

              <p
                color="rgba(25,4,69,0.6)"
                title="Map"
                className="navbar-link"
              >
                Map
              </p>
            </div>
          </a>
          <a
            className="links"
            href="/track/boards/62b95c3ca7aed90028c15713/report"
          >
            <div
              style={{
                border: "1px solid transparent",
                cursor: "pointer",
                position: "relative",
                color: "rgb(173, 168, 198)",
                padding: "0px 10px",
                height: "30px",
                margin: "0px 7px",
                borderRadius: "6px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease-out 0s",
                boxSizing: "border-box",
              }}
            >

              <p
                color="rgba(25,4,69,0.6)"
                title="Metrics"
                className="navbar-link"
              >
                Metrics
              </p>
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          flexGrow: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <a href="/share-board/62b95c3ca7aed90028c15713">
          <div
            style={{
              cursor: "pointer",
              boxSizing: "border-box",
              height: "30px",
              display: "flex",
              alignItems: "center",
              color: "rgb(24, 0, 69)",
              fontWeight: 600,
              borderRadius: "4px",
              transition: "all 0.4s ease-out 0s",
              backgroundColor: "white",
              textAlign: "center",
              fontSize: "13px",
              letterSpacing: "0px",
              border: "1px solid rgb(228, 224, 236)",
              position: "relative",
              boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 6px",
            }}
          >
            <span
              style={{
                color: "rgba(25, 4, 69, 0.4)",
                position: "relative",
                lineHeight: "100%",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            />
            <p title="Share" style={{ margin: "0px 10px" }}>
              Share
            </p>
          </div>
        </a>
        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ display: "flex" }}>
            <a
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
                fontWeight: 800,
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
                marginLeft: "7px",
                height: "28px",
              }}
            >
              + &nbsp;Create
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
