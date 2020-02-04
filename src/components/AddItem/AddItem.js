import React from "react";
import "./addItemStyle.css"

class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem = (event) => {
        this.setState({ newItem: event.target.value })
    }

    addButton = () => {
        console.log("Clicked add button")
        this.props.addTodoItem({
            id: Date.now(),
            text: this.state.newItem,
            completed: false
        })
        this.setState({newItem: ""})
    }

    render() {
        return(
            <div className="addItem">
                <input 
                    className="textArea" 
                    placeholder="Add new items here ;)" 
                    onChange={this.addItem}
                    value={this.state.newItem}
                />        
                <button className="addButton" onClick={this.addButton}>Add</button>
            </div>
        )
    }
}

export default AddItem;