import React, { Component } from 'react'

// Functional component - arrow function
const About = () => {
  const message = 'Hello World';
  return(
    <h1>Hello About Page - {message}</h1>
  )
}

// class About extends React.Component {
  
//   render() {
//     return(
//       <h1>Hello, I'm class component</h1>
//     )
//   }
// }

export default About