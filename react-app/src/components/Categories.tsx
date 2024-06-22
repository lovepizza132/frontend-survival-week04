import Category from './Catoegory';

type CategoriesProp = {
  categories: [],
  setFilterCategory: (value: string) => void,
}

export default function Categories({
  categories, setFilterCategory,
}: CategoriesProp) {
  return (
    <div>
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          padding: 0,
        }}
      >
        {['전체', ...categories].map((category: string) => (
          <Category
            key={category}
            category={category}
            setFilterCategory={setFilterCategory}
          />
        ))}
      </ul>
    </div>
  );
}
