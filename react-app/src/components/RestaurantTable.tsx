import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProp = {
  filteredRestaurants: Restaurant[],
}

export default function RestaurantTable({
  filteredRestaurants,
}: RestaurantTableProp) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th
              style={{
                paddingInline: '2rem',
              }}
            >
              식당 이름
            </th>
            <th>
              종류
            </th>
            <th>
              메뉴
            </th>
          </tr>
        </thead>
        <tbody>
          {[...filteredRestaurants].map((restaurant: Restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
