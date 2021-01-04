import React from "react";
import { ItemsInteface } from "./items";
import { Link, useHistory } from "react-router-dom";
import * as itemService from "./ItemsService";

import "./portfolioitem.css";

interface Props {
  item: ItemsInteface;
  loadItems: () => void;
}

const PortfolioItem = ({ item, loadItems }: Props) => {

  const history = useHistory();

  const handleDelete = async (id: string) => {
    await itemService.deleteItem(id);
    loadItems();
  };

  return (
    <div className="col-md-4">
      <div className="card item-card">
        <img className="card-img-top" alt="" src={`http://localhost:4000${item.imgPath}`}/>
        <div className="card-body m-2">
          <div className="d-flex justify-content-between">
            <h4>{item.title}</h4>
            <span
              className="Delet"
              style={{ cursor: "pointer" }}
              onClick={() => item._id && handleDelete(item._id)}
            >
              X
            </span>
          </div>

          <p>{item.description}</p>
        </div>

        <Link
          to={`//${item.url}`}
          target="_blank"
          className="btn btn-sm btn-outline-info m-2"
        >
          Go To Full Project
        </Link>
        <button
          onClick={() => history.push(`/update/${item._id}`)}
          className="btn btn-sm btn-outline-warning m-2"
        >
          Edit Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
