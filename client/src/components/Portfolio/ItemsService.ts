import axios from "axios";
import { ItemsInteface } from "./items";

const API = 'http://localhost:4000';

export const getItems = async () => {
    return await axios.get<ItemsInteface[]>(`${API}/portfolio`);
    
}
export const CreateProject = async (item: ItemsInteface) => {
    return await axios.post(`${API}/portfolio`, item);
    
}
export const getItem = async (id:string) => {
    return await axios.get<ItemsInteface>(`${API}/portfolio/${id}`);
    
}
export const updateItem = async (id:string, item:ItemsInteface) => {
    return await axios.put<ItemsInteface>(`${API}/portfolio/${id}`, item);
    
}
export const deleteItem = async (id:string) => {
    return await axios.delete<ItemsInteface>(`${API}/portfolio/${id}`);
    
}