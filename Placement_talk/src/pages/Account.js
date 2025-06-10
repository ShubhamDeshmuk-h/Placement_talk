import React from 'react'
import { useParams } from 'react-router-dom'


const Account = () => {
  const { id } = useParams()
  return (
    <div>Account</div>
  )
}

export default Account