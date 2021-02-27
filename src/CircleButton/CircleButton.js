import React from 'react';
import PropTypes, { string } from 'prop-types';
import './CircleButton.css';

export default function NavCircleButton(props) {
    const { tag, className, childrenm, ...otherProps } = props

    return React.createElement(
        props.tag,
        {
            className: ['NavCircleButton', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

NavCircleButton.propTypes = {
    tag: PropTypes.object,
    to: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
}

NavCircleButton.defaultProps = {
    tag: 'a',
}