const CounterDisplay = ({ count, label }) => {
  return (
    <p className="text-xl my-4">
      {label}: <span className="text-blue-600">{count}</span>
    </p>
  )
}

export default CounterDisplay
