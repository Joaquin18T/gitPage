import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <NavLink to={'/gitPage'}>Home</NavLink>
    </div>
  )
}
