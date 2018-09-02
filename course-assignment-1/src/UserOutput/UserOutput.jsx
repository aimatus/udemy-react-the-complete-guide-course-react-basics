import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {

    const paragrahps = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices lacinia dui, quis vestibulum est. Etiam feugiat mauris in dolor suscipit, sed faucibus enim aliquam. Etiam eu gravida lacus, sed condimentum enim. Sed et diam placerat, accumsan arcu vel, pulvinar massa.',
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque auctor lectus sed enim tempor ultricies. Maecenas semper elementum quam at rhoncus. Nulla consequat ac dolor id semper. Cras vitae nisi est. Pellentesque facilisis vulputate justo eu sollicitudin.'
    ]

    return (
        <div className="UserOutputParagraph">
            <p>
                {props.username ? 'Username: ' + props.username : paragrahps[0]}
            </p>
            <p>
                {paragrahps[1]}
            </p>
        </div>
    )
}

export default userOutput;