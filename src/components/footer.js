import React from 'react';

import './footer.css'

export default function Footer(props) {
    return (
        <section className = 'bottom-section'><ul>{props.guesses}</ul></section>
    )
}