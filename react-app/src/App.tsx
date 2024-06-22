import { useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';
import SearchBar from './components/SearchBar';

export default function App() {
  const restaurants = useFetchRestaurants();
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const categories = extractCategories(restaurants);
  console.log(filterCategory);
  return (
    <div>
      <h2>메가테라 맛집 리스트</h2>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <div className="restaurant">
        dd
      </div>
    </div>
  );
}
