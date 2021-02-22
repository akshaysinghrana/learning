import React, { useState } from 'react'

function FormComponent() {
  const [username, setUsername] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setUsername(value)
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleChange} />
      </div>
    </form>
  )
}

export default FormComponent
