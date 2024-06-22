import { useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';
import SearchBar from './components/SearchBar';
import filterRestaurants from './utils/filterRestaurants';
import RestaurantTable from './components/RestaurantTable';

export default function App() {
  const restaurants = useFetchRestaurants();
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  console.log(filteredRestaurants);
  return (
    <div>
      <h2>메가테라 맛집 리스트</h2>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        filteredRestaurants={filteredRestaurants}
      />
    </div>
  );
}
