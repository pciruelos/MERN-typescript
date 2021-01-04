import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { ItemsInteface } from "./items";
import * as itemService from "./ItemsService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface params {
  id: string;
}

const PortfolioForm = () => {
  const history = useHistory();
  const params = useParams<params>();
  // console.log(params);

  const initalState = {
    title: "",
    description: "",
    url: "",
    imgPath:"",
  };

  const [Item, setItem] = useState<ItemsInteface>(initalState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
if (!params.id) {
  await itemService.CreateProject(Item);
  toast.success("new project uploaded");
  // setItem(initalState);
} else {
  await itemService.updateItem(params.id, Item);
}
    history.push("/");
  };

  const handleInputChange = (e: InputChange) => {
    setItem({ ...Item, [e.target.name]: e.target.value });
  };

  const getItem = async (id: string) => {
    const res = await itemService.getItem(id);
    const { title , description , url, imgPath } = res.data;
    setItem({title, description, url, imgPath});
    // console.log(res);
  };

  useEffect(() => {
    if (params.id)
    getItem(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {params.id ? <h4>Edit item</h4> : <h4>Agregar un item</h4>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Insert Project Name"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                  value={Item.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="Insert Project url"
                  className="form-control"
                  onChange={handleInputChange}
                  value={Item.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Description"
                  className="form-control"
                  onChange={handleInputChange}
                  value={Item.description}
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-outline-success">
                  Edit confirm
                </button>
              ) : (
                <button className="btn btn-outline-warning">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
