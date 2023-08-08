import React from "react";
import { ItemType } from "../../types/Types";
import style from './Item.module.css'

type ItemPropsType = {
  item: ItemType;
};
function Item(props: ItemPropsType) {
  const { item } = props;
  return <div className={style.item}>{item.itemName}</div>;
}

export default Item;
