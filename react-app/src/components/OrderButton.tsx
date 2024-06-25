import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

type OrderButtonProp = {
  selectedFood: Food[],
  onClick: () => void,
}

export default function OrderButton({
  selectedFood, onClick,
}: OrderButtonProp) {
  const totalPrice = calculateTotalPrice(selectedFood);

  return (
    <button
      type="button"
      onClick={onClick}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
