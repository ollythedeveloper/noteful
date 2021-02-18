import React from 'react';
import CircleButton from '../CircleButton/CircleButton';

export default function NoteSidebar(props) {
    return(
        <div className="NoteSidebar">
            <CircleButton 
                tag="button"
                roles='link'
                onClick={() => props.history.goBack()}
                className="NoteSidebar__backButton" >
                    Back
                </CircleButton>
                {props.folder && (
                    <h3 className='NoteSidebar__folder-name'>
                        {props.folder.name}
                    </h3>
                )}
        </div>
    )
}

NoteSidebar.defaultProps = {
    history: {
        goBack: () => {}
    }
}