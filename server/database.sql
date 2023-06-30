create TABLE categories(
    categoryid SERIAL PRIMARY KEY,
    categoryname varchar(255) not null
);

create TABLE roles(
    roleid SERIAL PRIMARY KEY,
    rolename varchar(255) not null
);

create TABLE statuses(
    statusid SERIAL PRIMARY KEY,
    statusname varchar(255) not null
);