import { useState } from 'react'

const LoginToggleExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="text-center">
      <h3 className="text-xl mb-4">{isLoggedIn ? 'Welcome user' : 'Please login'}</h3>
      <button
        className="px-4 py-2 bg-orange-500 text-white rounded"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        Toggle login status
      </button>
    </div>
  )
}

export default LoginToggleExample
