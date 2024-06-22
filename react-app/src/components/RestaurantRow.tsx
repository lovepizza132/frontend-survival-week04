import Restaurant from '../types/Restaurant';
import Food from '../types/Food';
import Menu from './Menu';

type RestaurantRowProp = {
  restaurant: Restaurant,
}

export default function RestaurantRow({
  restaurant,
}: RestaurantRowProp) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food: Food, idx: number) => {
            const key = `${food.id}-${idx}`;

            return (
              <Menu
                key={key}
                food={food}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}
