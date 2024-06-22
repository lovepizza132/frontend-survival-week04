import Restaurant from '../types/Restaurant';
import Food from '../types/Food';
import MenuItem from './MenuItem';

type RestaurantRowProp = {
  restaurant: Restaurant,
}

export default function RestaurantRow({
  restaurant,
}: RestaurantRowProp) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((food: Food, idx: number) => {
            const key = `${food.id}-${idx}`;

            return (
              <MenuItem
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
