create table bakers (
    id  serial primary key,
    username varchar(30) not null unique,
    password varchar(20) not null,
    brand_name varchar(30),
    first_name varchar(20) not null,
    last_name varchar(25) not null,
    location_pickup varchar(50),
    city varchar(20) not null,
    state varchar(2),
    zip integer not null,
    email varchar(50) not null,
    phone varchar(15) 
)