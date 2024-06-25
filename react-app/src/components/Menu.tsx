import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProp = {
  menu: Food[],
}

export default function Menu({
  menu,
}: MenuProp) {
  const [selectedFood, setSelectedFood] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 없습니다.</p>
    );
  }

  const handleClick = (food: Food) => {
    setSelectedFood([...selectedFood, food]);
  };

  return (
    <ul>
      {menu.map((food: Food, idx: number) => {
        const key = `${food.id}-${idx}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button
              style={{ marginLeft: '.5rem' }}
              type="button"
              name={`#${food.name}`}
              onClick={() => handleClick(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
