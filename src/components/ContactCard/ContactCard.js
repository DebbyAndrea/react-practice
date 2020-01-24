import React from "react"

function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.contact.image}/>
            <h3>{props.contact.name}</h3>
            <p>Ph.no: {props.contact.phone}</p>
            <p>Email id: {props.contact.mail}</p>
            
        </div>
    )
}

export default ContactCard