update products
set title = $2, description = $3, size = $4, img_url = $5, price = $6, product_type = $7, baker_id = $8 
WHERE product_id = $1;

select * from products 
where baker_id = $8;