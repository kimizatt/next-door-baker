create table bakers (
    id  serial primary key,
    username varchar(30) not null unique,
    password varchar(800) not null,
    brand_name varchar(30),
    first_name varchar(20),
    last_name varchar(25),
    location_pickup varchar(50),
    city varchar(20),
    state varchar(2),
    zip integer,
    email varchar(50),
    phone varchar(15) 
)

CREATE TABLE products (
    product_id serial primary key,
    title varchar(30),
    description varchar(100),
    size varchar(30),
    img_url varchar(400),
    price money,
    baker_id integer REFERENCES bakers(id),
    product_type varchar(15) 
);