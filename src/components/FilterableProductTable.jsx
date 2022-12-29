import { useState } from 'react'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'

export function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [isStockOnly, setStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onStockOnlyChange={setStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </div>
  )
}
