import Food from '../types/Food';

type MenuItemProp = {
  food: Food,
}

export default function Menu({
  food,
}: MenuItemProp) {
  const handleClick = (food: Food) => {
    console.log(food);
  };

  return (
    <li>
      {food.name}
      (
      {food.price}
      원)
      <button
        style={{ marginLeft: '.5rem' }}
        type="button"
        name={food.name}
        onClick={() => handleClick(food)}
      >
        선택
      </button>
    </li>
  );
}
