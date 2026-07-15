import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>This is a home page</p>

      <div className="flex gap-3 mt-4">
        <Link to="/learning" className="p-3 rounded-xl bg-orange-500 text-white">
          Learning Examples
        </Link>
        <Link to="/contact" className="p-3 rounded-xl bg-gray-400 text-white">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Home