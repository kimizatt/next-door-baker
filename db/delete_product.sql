delete from products
where product_id = $1;

select * from products 
where baker_id = $2;

