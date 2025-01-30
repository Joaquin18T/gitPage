import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to={'about'}>About</NavLink>
    </div>
  )
}
