-- Challenge: JOINS
-- MVP:
-- Get the names for 100 most populated cities together with the countries they’re located in and their respective population.
-- Get only the official languages spoken in each country.
-- Get all the records for all three tables without repeating columns multiple times.
-- Get all the countries that people speak French in.
-- Get all the cities where English is spoken with a population over 300000.
-- Get the names of the cities, countries and languages spoken for every country code that has ‘U’ as the middle letter.
-- Get the names of the countries with Arabic as the official language.
-- Get the population, city and country names where Chinese is spoken by less than 10% of the people.

USE world_x;
SHOW TABLES;
SELECT * FROM cities LIMIT 10;
SELECT * FROM countries LIMIT 100;
SELECT * FROM country_languages LIMIT 100;

-- Get the names for 100 most populated cities together with the countries they’re located in and their respective population.
SELECT *  
	FROM cities AS ci INNER JOIN countries AS co 
	ON ci.countries_code = co.code 
	ORDER BY "population" LIMIT 100;
    
-- Get only the official languages spoken in each country.
SELECT la.countries_code, co.name, la.language 
	FROM countries AS co INNER JOIN country_languages AS la
	ON co.code  = la.countries_code
    LIMIT 100;
    
-- Get all the records for all three tables without repeating columns multiple times.
SELECT *
	FROM cities AS ci
	LEFT JOIN countries AS co ON (ci.countries_code = co.code)
	LEFT JOIN country_languages AS la ON (la.countries_code = co.code)
    LIMIT 100;

-- Get all the countries that people speak French in.e
SELECT * 
	FROM countries AS co
    INNER JOIN country_languages AS la
    WHERE la.language = "French";
    
-- Get all the cities where English is spoken with a population over 300000.
SELECT *
	FROM cities AS ci
    LEFT JOIN countries AS co ON (ci.countries_code = co.code)
	LEFT JOIN country_languages AS la ON (la.countries_code = co.code)
    WHERE 
		la.language = "English" 
		AND ci.population > 30000;

-- Get the names of the cities, countries and languages spoken for every country code that has ‘U’ as the middle letter.
SELECT ci.name AS "city name" , co.name AS "country", co.code
	FROM cities AS ci
    LEFT JOIN countries AS co ON (ci.countries_code = co.code)
	LEFT JOIN country_languages AS la ON (la.countries_code = co.code)
    WHERE 
		co.code LIKE "%u%"
        

-- Get the names of the countries with Arabic as the official language.


-- Get the population, city and country names where Chinese is spoken by less than 10% of the people.











