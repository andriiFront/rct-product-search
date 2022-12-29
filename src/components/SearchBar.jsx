export function SearchBar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onStockOnlyChange
}) {
  
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={e => onFilterTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={() => onStockOnlyChange(!isStockOnly)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}
