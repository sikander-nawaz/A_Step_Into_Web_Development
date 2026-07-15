import { useState } from 'react'

const CounterExample = () => {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-4">{count}</h3>
      <button className="px-4 py-2 bg-orange-500 text-white rounded mr-2" onClick={increase}>
        Increase by 1
      </button>
      <button className="px-4 py-2 bg-orange-700 text-white rounded" onClick={decrease}>
        Decrease by 1
      </button>
    </div>
  )
}

export default CounterExample
