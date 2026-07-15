const ProductList = ({ search }) => {
  return (
    <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
      <p className="font-semibold text-gray-500 text-sm">Product List Component</p>
      <p>
        Showing results for: <span className="text-indigo-600 font-bold">{search || 'Nothing yet'}</span>
      </p>
    </div>
  )
}

export default ProductList
