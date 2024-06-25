import { PropsWithChildren } from 'react';
import Food from '../types/Food';

type MenuItemProp = {
  food: Food,
}

export default function MenuItem({
  food, children,
}: PropsWithChildren<MenuItemProp>) {
  return (
    <li
      style={{
        listStyleType: 'none',
        display: 'flex',
        paddingBlock: '.4rem',
      }}
    >
      <span
        style={{
          margin: 'auto',
        }}
      >
        {food.name}
        (
        {food.price.toLocaleString()}
        원)
      </span>

      {children}
    </li>
  );
}
