import { useEffect, useState } from 'react'
import UserCard from '../../components/ui/UserCard'

// Parent → Child with API: parent fetches data, passes each user to UserCard child
const ParentToChildApiExample = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Parent fetches API data with useEffect, then passes each user to UserCard via props
      </p>

      {users.length === 0 ? (
        <p className="text-center text-gray-400">Loading users...</p>
      ) : (
        users.slice(0, 3).map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      )}
    </div>
  )
}

export default ParentToChildApiExample
