update bakers 
set brand_name = $3, 
first_name = $4,
last_name = $5,
location_pickup = $6,
city = $7, 
state = $8, 
zip = $9, 
email = $10, 
phone = $11
where id = $1;

SELECT * FROM bakers WHERE id = $1;
