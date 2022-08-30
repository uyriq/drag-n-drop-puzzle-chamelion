/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'

export default function DropTarget(props) {
    const { puzzleElement } = props
    return <li className="listItem">{puzzleElement.elementSrc && <img src={`./${puzzleElement.elementSrc}`} />}</li>
}
