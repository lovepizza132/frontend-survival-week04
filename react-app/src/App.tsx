import { useInterval, useLocalStorage } from 'usehooks-ts';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import Receipt from './types/Receipt';
import ReceiptPrinter from './components/ReceiptPrinter';

export default function App() {
  const restaurants = useFetchRestaurants();
  const emptyReceipt = {} as Receipt;
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  useInterval(() => {
    setReceipt(emptyReceipt);
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h2>푸드코트 키오스크</h2>
      <Cart
        setReceipt={setReceipt}
      />
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
      <ReceiptPrinter
        receipt={receipt}
      />
    </div>
  );
}
