type CategoryProp = {
  category: string,
  setFilterCategory: (value: string) => void,
}

export default function Category({
  category, setFilterCategory,
}: CategoryProp) {
  return (
    <li
      style={{
        marginRight: '1rem',
      }}
    >
      <button type="button" onClick={() => setFilterCategory(category)}>{category}</button>
    </li>
  );
}
