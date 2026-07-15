const Student = ({ name, course, sendMessage }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <p className="font-semibold text-gray-500 text-sm">Student Component</p>
      <p>Name: {name}</p>
      <p>Course: {course}</p>

      {sendMessage && (
        <button
          className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => sendMessage('Hello from child!')}
        >
          Send message to parent
        </button>
      )}
    </div>
  )
}

export default Student
