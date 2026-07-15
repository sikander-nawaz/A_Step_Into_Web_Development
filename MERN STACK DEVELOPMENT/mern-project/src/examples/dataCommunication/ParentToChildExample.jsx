import { useState } from 'react'
import CounterDisplay from '../../components/ui/CounterDisplay'
import Student from '../../components/ui/Student'

// Parent → Child: pass data down using props
const ParentToChildExample = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 mb-4">Parent holds state and passes it to child components</p>

      <CounterDisplay count={count} label="Current count" />

      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded mb-6"
        onClick={() => setCount(count + 1)}
      >
        Increase (in parent)
      </button>

      <Student name="Ali" course="MERN Stack" />
      <Student name="Noor" course="HTML CSS" />
      <Student name="Talha" course="Cyber Security" />
    </div>
  )
}

export default ParentToChildExample
