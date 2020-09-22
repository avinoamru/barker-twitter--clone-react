import React, { useContext } from 'react'
import { BarksContext } from '../Contexts/BarksContext'
import Bark from './Bark'
const Barks = () => {

  const barks = useContext(BarksContext)[0] // only the barks list, I don't need the setBarks function

  return (
    <div className="barks">
      {barks.map(({ _id, name, content }) => (
        <Bark key={`${_id}`} name={name} content={content} />
      ))}
    </div>
  )
}

export default Barks;