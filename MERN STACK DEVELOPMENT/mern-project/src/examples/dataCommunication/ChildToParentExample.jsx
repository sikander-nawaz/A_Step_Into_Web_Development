import { useState } from 'react'
import Student from '../../components/ui/Student'

// Child → Parent: child calls a callback function passed by parent
const ChildToParentExample = () => {
  const [message, setMessage] = useState('')

  function receiveMessage(data) {
    setMessage(data)
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 mb-4">
        Parent passes a function to child; child calls it to send data up
      </p>

      <h3 className="text-pink-500 text-xl mb-4">
        Message from child: {message || 'No message yet'}
      </h3>

      <Student sendMessage={receiveMessage} />
    </div>
  )
}

export default ChildToParentExample
