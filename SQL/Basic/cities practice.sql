-- Cities Data Insights

-- Write queries for to get the following from the `cities` table: (String queries should not be case sensitive)
USE world_x;
SELECT * FROM cities;
-- 1. Country codes for cities with a `population` greater than `126304`
SELECT * FROM cities WHERE population > 126304;
-- 2. Population of cities with a name that contains two `'o|O'` characters
SELECT * FROM cities WHERE name LIKE '%o%';
-- 3. City records for cities in `Afghanistan` or `Congo`
SELECT * FROM cities WHERE countries_code LIKE 'co%' OR countries_code LIKE 'af%';
SELECT * FROM cities WHERE countries_code IN ('AFG', 'COG');
-- 4. Country codes for cities with an `id` divisible by `23`
SELECT countries_code FROM cities WHERE id % 23 = 0;
-- 5. City names and population for cities with a `name` that begins with `a|A` or with a country code that begins with `a|A`
SELECT name, population FROM cities WHERE 
	name LIKE 'a%' OR 
    countries_code LIKE 'a%';
-- 6. Id and population for cities that have a `population` greater than `104234` or a `name` thats start with `san`
SELECT id, population FROM cities WHERE 
	population > 104234 OR 
    name LIKE 'san%';

-- Lessons
-- LIMITING
SELECT * FROM cities LIMIT 10;
SELECT * FROM cities LIMIT 10 OFFSET 1;
SELECT * FROM cities LIMIT 1, 10; -- equal to LIMIT 10 OFFSET 1; -- select from item index from 1 to 10

-- ORDERING
SELECT * FROM cities ORDER BY population; -- by default, sort ASC
SELECT * FROM cities ORDER BY population DESC;