import React from "react";
import { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import EditIcon from "@material-ui/icons/Edit";

const listyle = {
  padding: "8px",
  border: "1px solid black",
  margin: "8px",
  backgroundColor: "#E0FFFF",
  textTransform: "uppercase",
  position: "relative",
  display: "flex",
  alignItems: "center",
};
function Listitems(props) {
  const [strikestate, setstrikestate] = useState(false);

  function editFn() {
    props.toCallFn2(props.index);
  }

  function toggleclass() {
    setstrikestate(!strikestate);
  }
  return (
    <>
      <li style={listyle}>
        <div>
          <DeleteForeverIcon
            className="delete"
            onClick={() => {
              props.toCallFn1(props.index);
            }}
          />
          <EditIcon className="edit" onClick={editFn} />
          <StrikethroughSIcon className="strike" onClick={toggleclass} />
        </div>
        <span className={strikestate ? "cutit" : null}>{props.item}</span>
      </li>
    </>
  );
}

export default Listitems;
