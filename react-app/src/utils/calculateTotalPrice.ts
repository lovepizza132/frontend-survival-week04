import Food from '../types/Food';

export default function calculateTotalPrice(selectedFood: Food[]) {
  return selectedFood.reduce((acc: number, cur: Food) => (acc + cur.price), 0);
}
