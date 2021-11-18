import React from "react";
import { useState } from "react";
import Listitems from "./Listitems";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

// const listyle = {
//   padding: "8px",
//   border: "1px solid black",
//   margin: "8px",
//   backgroundColor: "#E0FFFF",
//   textTransform: "uppercase",
// };

function Mainc() {
  const [item, setitem] = useState("");
  const [list, setlist] = useState([]);
  const [editbool, seteditbool] = useState(false);
  const [edit_id, setedit_id] = useState(-1);

  const btnEvent = (event) => {
    setitem(event.target.value);
  };
  const addtolist = () => {
    console.log("clicked");
    if (!item.trim().length) {
      return;
    }
    setlist((oldlist) => {
      if (!oldlist) {
        oldlist = [];
      }
      return [...oldlist, item];
    });
    console.log(list);
    setitem("");
  };

  function deleteItem(index) {
    // console.log("deleted", index);
    setlist((oldlist) => {
      return oldlist.filter((item, i) => {
        return i !== index;
      });
    });
  }

  function edititem(index) {
    seteditbool(true);
    setitem(list[index]);
    console.log(index);
    setedit_id(index);
  }
  function updateList() {
    console.log("updateList clicked", item);
    console.log("updateList clicked", edit_id);

    setlist((oldlist) => {
      for (let id in oldlist) {
        if (id == edit_id) {
          oldlist[id] = item;
        }
      }
      return oldlist;
    });

    setitem("");
    seteditbool(false);
    // console.log("Updated array => ", list);
  }

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Add an item"
        value={item}
        onChange={btnEvent}
      />
      {!editbool ? (
        <>
          <button onClick={addtolist}>
            <AddIcon />
          </button>
        </>
      ) : (
        <>
          <button onClick={updateList}>
            <EditIcon />
          </button>
        </>
      )}

      <br />
      <div className="list">
        <ul style={{ padding: "2em" }}>
          {list &&
            list.map((itemvalue, index) => (
              <Listitems
                item={itemvalue}
                key={index}
                index={index}
                toCallFn1={deleteItem}
                toCallFn2={edititem}
              ></Listitems>
            ))}
          {/* <li style={listyle}>{item}</li>
          <li style={listyle}>mango</li> */}
        </ul>
      </div>
    </div>
  );
}
export default Mainc;
