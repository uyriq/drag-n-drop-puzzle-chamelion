/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'

export default function DragList(props) {
    const { puzzleElement } = props

    return (
        <li key={puzzleElement.id} className="listItem">
            {puzzleElement && <img src={`./${puzzleElement.elementSrc}`} />}
        </li>
    )
}
