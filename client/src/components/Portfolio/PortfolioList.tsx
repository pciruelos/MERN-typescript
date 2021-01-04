import React, { useEffect, useState } from "react";
import { ItemsInteface } from "./items";
import * as itemService from "./ItemsService";
import PortfolioItem from './PortfolioItem'

const PortfolioList = () => {

  const [Items, setItems] = useState<ItemsInteface[]>([]);

  const loadItems = async () => {
    const res = await itemService.getItems();
    console.log(res);

    const formateditem = res.data.map(item => {
      return {
        ...item,
        createdAt: item.createdAt ? new Date(item.createdAt): new Date(),
        updatedAt: item.updatedAt? new Date(item.updatedAt): new Date(),
      }
    }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

    setItems(formateditem);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="row">
      {Items.map((item) => {
          return <PortfolioItem item={item} key={item._id} loadItems={loadItems}/>
      })}
    </div>
  );
};

export default PortfolioList;
