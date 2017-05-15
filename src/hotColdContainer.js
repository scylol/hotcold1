import React from 'react';
import './hotColdContainer.css'

import Footer from './components/footer';
import Form from  './components/form';
import Header from  './components/header';

export default function HotCold(props){
  const guesses = [5,5,10,23,100,56,73];
  const guessList = guesses.map((guess,index)=>{
    return (<li classname='guess' key={index}>{guess}</li>);
  });

  return (
    <main>
      <Header/>
      <Form guessList = {guessList} />
      <Footer guesses = {guessList} />
    </main>

  )
}
