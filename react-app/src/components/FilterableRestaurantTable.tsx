import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import extractCategories from '../utils/extractCategories';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantTable from './RestaurantTable';

type FilterableRestaurantTableProp = {
  restaurants: Restaurant[],
}

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProp) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
  return (
    <div>
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
