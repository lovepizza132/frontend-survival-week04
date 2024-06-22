import TextField from './TextField';
import Categories from './Categories';

type SearchBarProp = {
  filterText: string,
  setFilterText: (value: string) => void,
  categories: [],
  setFilterCategory: (value: string) => void,
}

export default function SearchBar({
  filterText, setFilterText, categories, setFilterCategory,
}: SearchBarProp) {
  return (
    <div>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
