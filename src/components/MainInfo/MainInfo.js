import React from "react"

function MainInfo() {
    const firstName = "Debby";
    const lastName = "Andrea";
    const time = new Date().getHours();
    let timeOfDay;
    const inlineStyles = {
        color: "#FF8C06"
    }
    if (time < 12) {
        timeOfDay = "Morning";
    } else if (time >= 12 && time <= 15) {
        timeOfDay = "Afternoon";
    } else if (time >= 16 && time < 19) {
        timeOfDay = "Evening";
    } else {
        timeOfDay = "Night";
    }

    return (
        <div>
            
            <h3 style={inlineStyles}>Hi All.. This is {`${firstName} ${lastName} J`}</h3>
            <h3>Its now {`${time}`}.. So Good {`${timeOfDay} everyone`}</h3>
            <p>
                This is in paragraph tag.
            </p>
            <ul>
                <li>Hawaii</li>
                <li>Indonesia</li>
                <li>Vagamon</li>
            </ul>
        </div>
    )
}

export default MainInfo