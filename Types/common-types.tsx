export interface TypesItem {
    name: string;
    link: string;
    icon?:any; // todo - find a type
  }

export interface iProduct{
  img:string,
  title:string,
  brend:string,
  price:number,
  altDescription:string,
  id:number | string,
  category?:string,
}

export interface iCartItem{
  product:iProduct,
  quantity:number
}

export interface iSingleData{
    data: iProduct,
}