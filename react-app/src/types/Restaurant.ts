import Food from './food';

type Restaurant = {
  id: string,
  category: string,
  name: string,
  menu: Food[]
}

export default Restaurant;
