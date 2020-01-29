import React from "react";
import "./addItemStyle.css"

class AddItem extends React.Component {
    render() {
        return(
            <div className="addItem">
                <input className="textArea" placeholder="Add new items here ;)"></input>
                <button className="addButton">Add</button>
            </div>
        )
    }
}

export default AddItem;