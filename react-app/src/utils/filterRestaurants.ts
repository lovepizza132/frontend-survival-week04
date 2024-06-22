import Restaurant from '../types/Restaurant';

type filterRestaurantsConditions = {
  filterText: string,
  filterCategory: string,
}

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterRestaurantsConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (restaurant.category === filterCategory);
  const filteredRestaurants = filterCategory === '전체' ? restaurants : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contain = (restaurant: Restaurant) => (normalize(restaurant.name).includes(query));
  return filteredRestaurants.filter(contain);
}
