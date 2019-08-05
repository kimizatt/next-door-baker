insert into orders(product_id, quantity, customer_name, customer_phone, baker_id, date)
values($1, $2, $3, $4, $5, $6);

select * from products;