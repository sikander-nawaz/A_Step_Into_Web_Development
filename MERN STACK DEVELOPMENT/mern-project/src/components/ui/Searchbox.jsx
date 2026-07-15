const Searchbox = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search something..."
        className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Searchbox
