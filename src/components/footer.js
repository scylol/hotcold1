import React from 'react';

export default function Footer(props) {
    return (
        <section className = 'bottom-section'><ul>{props.guesses}</ul></section>
    )
}