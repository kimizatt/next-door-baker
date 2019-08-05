insert into products(title, description, size, price, img_url, baker_id, product_type)
values('Perfect Chocolate Cake', 'Moist, yummy cake', 'Double layer round cake', 'https://www.recipetineats.com/wp-content/uploads/2018/03/Chocolate-Cake_1.jpg', 20, 1, 'Cake'),
('Molasses Cookies','Soft gingery cookies with sugar coating', '12 3 inch cookies', 'https://i.etsystatic.com/7360273/r/il/3fd0bb/484631701/il_794xN.484631701_hr3m.jpg', 5, 1, 'Cookies'),
('Cinnamon Rolls', 'Just like grandma used to make! (No nuts, no raisins)', '1 dozen',	'https://images-gmi-pmc.edge-generalmills.com/473d320b-fa9f-43fb-8fde-410b450dd328.jpg', 15, 3, 'Sweet Breads'),
('Whole Wheat Bread', 'Whole grain goodness', '1 9x5 in loaf', 'https://lovingitvegan.com/wp-content/uploads/2016/03/Wholewheat-Bread-16-1.jpg', 6, 3,'Breads')

insert into orders(product_id, quantity, total_cost, customer_name, customer_phone, baker_id)
values(2, 3, 15, 'Kristina', '8015555555', 1),
(8, 1, 12, 'Tori', '8015551234', 3),
(1, 2, 20, 'KhiavDim', '9025559876', 1);