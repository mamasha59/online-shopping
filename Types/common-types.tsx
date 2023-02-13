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
  id:number,
}

export interface iCartItem{
  product:iProduct,
  quantity:number
}