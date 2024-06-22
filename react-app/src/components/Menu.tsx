import Food from '../types/Food';

type MenuProp = {
  food: Food,
}

export default function Menu({
  food,
}: MenuProp) {
  return (
    <li>
      {food.name}
      (
      {food.price}
      원)
    </li>
  );
}
