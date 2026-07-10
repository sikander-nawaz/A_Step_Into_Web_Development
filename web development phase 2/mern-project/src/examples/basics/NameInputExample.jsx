import { useState } from 'react'

const NameInputExample = () => {
  const [name, setName] = useState('')

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Enter your name"
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        onChange={(event) => setName(event.target.value)}
      />
      <h3>Hello {name || 'Guest'}</h3>
    </div>
  )
}

export default NameInputExample
