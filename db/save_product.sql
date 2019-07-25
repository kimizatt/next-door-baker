insert into products(title, description, size, img_url, price, product_type, baker_id)
values($1, $2, $3, $4, $5, $6, $7);

select * from products;
