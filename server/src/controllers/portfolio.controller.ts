import { RequestHandler } from "express";
import Portfolio from "../models/portfolio";
import path from "path";
import fs from "fs-extra";

export const gettingWorks: RequestHandler = async (req, res) => {
  const portfolioitems = await Portfolio.find();
  return res.json(portfolioitems);
};
export const gettingOneWork: RequestHandler = async (req, res) => {
  try {
    const itemFound = await Portfolio.findById(req.params.id);
    if (!itemFound) res.status(204).json();
    return res.json(itemFound);
  } catch (error) {
    return res.json(error);
  }
};
// export const CreateWork: RequestHandler = async (req, res) => {
//     const portfolioitem = new Portfolio(req.body);
//     console.log(portfolioitem);
//     const saveitem = await portfolioitem.save();
//     res.json(saveitem);
// };
export const CreateWork: RequestHandler = async (req, res) => {
  const { title, description, url } = req.body;

  const portfolioitem = new Portfolio({
    title: title,
    description: description,
    url: url,
    imgPath: "/uploads/" + req.file.filename,
  });

  console.log(portfolioitem);
  const saveitem = await portfolioitem.save();
  res.json(saveitem);
};

export const DeleteWork: RequestHandler = async (req, res) => {
  try {
    const itemFound = await Portfolio.findByIdAndDelete(req.params.id);
    if (itemFound) {
      await fs.unlink(path.resolve("./src/" + itemFound.imgPath));
      res.json("deleted");
    }
  } catch (error) {
    console.log(error);
  }
};
export const EditWork: RequestHandler = async (req, res) => {
  const itemUpdated = await Portfolio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json("editing works");
};
