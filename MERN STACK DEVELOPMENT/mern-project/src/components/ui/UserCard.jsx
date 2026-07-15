const UserCard = ({ name, email, city }) => {
  return (
    <div className="m-4 p-4 border border-gray-300 rounded-xl text-left max-w-md mx-auto">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">{city}</p>
    </div>
  )
}

export default UserCard
