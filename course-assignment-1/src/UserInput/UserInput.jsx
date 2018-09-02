import React from 'react'

const userInput = (props) => {

    const containerCssStyles = {
        textAlign: 'center'
    }

    const labelCssStyles = {
        padding: '16px',
        color: "#2E86C1"
    }

    const cssStyles = {
        padding: '8px',
        width: '300px',
        color: '#2ECC71',
        fontSize: '18px'
    }

    return (
        <div style={containerCssStyles}>
            <label
                style={labelCssStyles}>
                Enter a username:
            </label>
            <input
                type="text"
                onChange={props.changed}
                value={props.username}
                style={cssStyles} />
        </div>
    )
}

export default userInput;