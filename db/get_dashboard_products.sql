select * 
FROM bakers 
FULL OUTER JOIN products
ON bakers.id = products.baker_id;