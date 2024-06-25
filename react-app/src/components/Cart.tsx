import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import MenuItem from './MenuItem';
import OrderButton from './OrderButton';
import Receipt from '../types/Receipt';
import useCreateOrders from '../hooks/useCreateOrder';

type CartProp = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProp) {
  const [selectedFood, setSelectedFood] = useLocalStorage<Food[]>('cart', []);
  const { createOrder } = useCreateOrders();

  const handleClickCancel = (index: number) => {
    const foods = selectedFood.filter((food, idx) => idx !== index);
    setSelectedFood(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFood.length) {
      return;
    }

    const receipt = await createOrder(selectedFood);
    setReceipt(receipt);
    setSelectedFood([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h3>점심 바구니</h3>
      <ul
        style={{
          listStyleType: 'none',
          width: '30%',
        }}
      >
        {selectedFood.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <MenuItem
              key={key}
              food={food}
            >
              <button
                style={{
                  marginLeft: '.5rem',
                }}
                type="button"
                name={food.name}
                onClick={() => handleClickCancel(index)}
              >
                취소
              </button>
            </MenuItem>
          );
        })}
      </ul>
      <OrderButton
        selectedFood={selectedFood}
        onClick={handleClickOrder}
      />
    </div>
  );
}
