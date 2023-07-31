-- AGGREGATIONS - functions that returns single values
SELECT * FROM cities;
SELECT * FROM countries;
SELECT * FROM country_languages;
-- COUNT
-- numbers of all records in cities table
SELECT COUNT(*) FROM cities;

-- numbers of cities in NZ
SELECT COUNT(*) FROM cities WHERE countries_code = "NZL";

-- DISTINCT
-- number of UNIQUE city names
SELECT COUNT(DISTINCT(name)) FROM cities;

-- MIN, MAX
SELECT MIN(population) FROM cities;

SELECT MAX(population) FROM cities;

SELECT * FROM cities WHERE population = (SELECT MAX(population) FROM cities); -- nested condition

SELECT MAX(population), name FROM cities WHERE countries_code = "AUS" GROUP BY name ORDER BY name;

SELECT * FROM cities WHERE population = (SELECT MAX(population) FROM cities WHERE countries_code = "AUS");

-- AVERAGE, SUM
SELECT AVG(population) FROM cities;
SELECT AVG(population) FROM cities WHERE countries_code = "AUS";

SELECT SUM(population) FROM cities;
SELECT SUM(population) FROM cities WHERE countries_code = "AUS";

-- GROUP BY
SELECT district, SUM(population) FROM cities WHERE countries_code = "AUS" GROUP BY district ORDER BY district;


-- Challenge: Country Queries
-- Find the total population in Afghanistan.
SELECT SUM(population) FROM cities WHERE countries_code = "AFG";
SELECT countries.name, cities.countries_code, SUM(cities.population)
	FROM cities 
	INNER JOIN countries ON (cities.countries_code = countries.code)
    WHERE countries.code = "AFG"
    GROUP BY countries.name;

-- Find the average population of cities in Saudi Arabia.
SELECT name, population FROM cities WHERE countries_code = "SAU" ORDER BY name;
SELECT AVG(population) FROM cities WHERE countries_code = "SAU";

-- Find the 10 smallest country populations.
SELECT cities.countries_code, countries.name, SUM(cities.population)
	FROM cities 
    INNER JOIN countries ON (cities.countries_code = countries.code)
    GROUP BY countries_code
    ORDER BY SUM(population) 
    LIMIT 10
    ;

-- Find the top 10 most populated countries that end with stan
SELECT cities.countries_code, countries.name, SUM(cities.population)
	FROM cities 
    INNER JOIN countries ON (cities.countries_code = countries.code)
	WHERE countries.name LIKE "%stan"
    GROUP BY countries_code
    ORDER BY SUM(population) DESC
    LIMIT 10
    ;

-- Find the most populated city in countries that end with stan
SELECT cities.countries_code, countries.name, SUM(cities.population)
	FROM cities 
    INNER JOIN countries ON (cities.countries_code = countries.code)
	WHERE countries.name LIKE "%stan"
    GROUP BY countries_code
    ORDER BY SUM(population) DESC
    LIMIT 1
    ;

-- Find the average population of cities that have a country code that contains a T
SELECT cities.countries_code, countries.name, AVG(cities.population)
	FROM cities 
    INNER JOIN countries ON (cities.countries_code = countries.code)
	WHERE countries.code LIKE "%t%"
    GROUP BY cities.countries_code
    ORDER BY AVG(population) DESC
    ;
    
-- Find the most populated and least populated cities for each country that ends with stan, should be ordered alphabetically.
SELECT ct.name AS country_name,
	(SELECT c.name FROM cities AS c WHERE ct.code = c.countries_code ORDER BY c.population DESC LIMIT 1) AS most_populated_city,
    (SELECT c.name FROM cities AS c WHERE ct.code = c.countries_code ORDER BY c.population ASC LIMIT 1) AS least_populated_city,
    (SELECT c.population FROM cities AS c WHERE ct.code = c.countries_code ORDER BY c.population DESC LIMIT 1) AS most_populated_population,
    (SELECT c.population FROM cities AS c WHERE ct.code = c.countries_code ORDER BY c.population LIMIT 1) AS least_populated_population
FROM countries AS ct
WHERE ct.name LIKE '%stan'
ORDER BY ct.name;


















