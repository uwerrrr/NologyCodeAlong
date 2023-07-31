-- list all databases 
SHOW DATABASES;

-- to interact with a database
USE world_x;

-- view all tables of using database
SHOW TABLES;

-- view everything from a table
SELECT * FROM cities;

-- to view selected columns
SELECT name, district FROM cities;

-- filtering data
-- comparison
SELECT * FROM cities WHERE countries_code = 'CAN';
SELECT * FROM cities WHERE population <= 10000;

-- filtering with LIKE
	-- LIKE is case-insensitive
SELECT * FROM cities WHERE name LIKE 'a%'; -- cities that start with A
SELECT * FROM cities WHERE name LIKE '%a'; -- cities that end with A
SELECT * FROM cities WHERE name LIKE '_o%'; -- cities that has 1 char before o


-- *** Multiple conditions

-- AND
SELECT * FROM cities WHERE 
	name LIKE '%w%' 
    AND 
	population >= 1000000;

-- OR
SELECT * FROM cities WHERE 
	name LIKE 'w%' 
    OR 
    population < 1000000;

-- IN
	-- can use IN to list all value of equal comparison
SELECT * FROM cities WHERE 
	-- countries_code = 'AUS' OR countries_code = 'USA' OR countries_code = 'BRA'; -> use IN instead
	countries_code IN ('AUS', 'CAN', 'BRA');

-- BETWEEN __ AND __
SELECT * FROM cities WHERE population BETWEEN 5000 AND 10000;

-- ** Alter selection
-- LIMITING
SELECT * FROM cities LIMIT 10;
SELECT * FROM cities LIMIT 10 OFFSET 1;
SELECT * FROM cities LIMIT 1, 10; -- equal to LIMIT 10 OFFSET 1; -- select from item index from 1 to 10

-- ORDERING
SELECT * FROM cities ORDER BY population; -- by default, sort ASC
SELECT * FROM cities ORDER BY population DESC;


























