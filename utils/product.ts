export type Chart = {
    id:         number;
    user_id:    null;
    quantity:   number;
    product_id: number;
    created_at: Date;
    updated_at: Date;
    tb_product: Product;
}

export type Product = {
    id:                  number;
    product_name:        string;
    product_price:       number;
    product_description: string;
    product_image:       string;
    created_at:          Date;
    updated_at:          Date;
}