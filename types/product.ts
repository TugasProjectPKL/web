export type Product ={
    id:number,
    product_name:string,
    product_price:number,
    product_description:string,
    product_image:string,
    created_at:string,
    updated_at:string
}

export type Cart ={
    id:number,
    product_id:number,
    quantity:number,
    created_at:string,
    updated_at:string
}