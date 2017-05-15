import React from 'react';

export default function hotCold(props){
  const guesses = props.guesses.map((guess,index)=>{
    return (<li key={index}>{guess}</li>);
  });

  return (

    <main>
      <section><h2>Message</h2></section>
      <section>
        <input type="text"></input>
        <h3>Guess number {props.guesses[props.guesses.length-1]}</h3>
      </section>
      <section><ul>{guesses}</ul></section>
    </main>

  )
}
