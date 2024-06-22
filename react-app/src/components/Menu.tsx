import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProp = {
  menu: Food[],
}

export default function Menu({
  menu,
}: MenuProp) {
  return (
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
  );
}
