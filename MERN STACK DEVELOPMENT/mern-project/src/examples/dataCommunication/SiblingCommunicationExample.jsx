import { useState } from 'react'
import Searchbox from '../../components/ui/Searchbox'
import ProductList from '../../components/ui/ProductList'

// Sibling ↔ Sibling: shared state lives in parent, both siblings receive it via props
const SiblingCommunicationExample = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Parent holds shared state — Searchbox updates it, ProductList reads it
      </p>

      <Searchbox search={search} setSearch={setSearch} />
      <ProductList search={search} />
    </div>
  )
}

export default SiblingCommunicationExample
