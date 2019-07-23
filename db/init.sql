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