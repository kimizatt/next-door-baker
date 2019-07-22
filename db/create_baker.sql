insert into bakers (username, password)
values ($1, $2)
returning *;