export interface TypesItem {
    name: string;
    link: string;
    icon?:any; // todo - find a type
  }

interface iT{
  id: number;
  [key: string]: string | number
}  

export interface iProduct{
  img:string,
  title:string,
  brend:string,
  price:number,
  altDescription:string,
  id:iT,
  category?:string,
}

export interface iCartItem{
  product:iProduct,
  quantity:number
}

export interface iSingleData{
    data: iProduct,
}