CREATE TABLE products (
    product_id serial primary key,
    title varchar(30),
    description varchar(100),
    size varchar(30),
    img_url varchar(150),
    price money,
    baker_id integer REFERENCES bakers(id)
);