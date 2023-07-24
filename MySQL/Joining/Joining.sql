USE world_x;

INSERT INTO cities(name, countries_code, district, population) VALUES ('A Some city', 'AAA', 'district', 1);

-- *** INNER JOIN
SELECT * FROM cities AS C INNER JOIN countries AS ct ON c.countries_code = ct. code ORDER BY ct .name;

SELECT c.name, ct.name FROM cities AS C INNER JOIN countries AS ct ON c.countries_code = ct. code;

SELECT c.name AS city_name, ct.name AS country_name FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code;

-- *** LEFT JOIN
SELECT * FROM cities AS c LEFT JOIN countries AS ct ON c.countries_code = ct.code ORDER by ct.name;

-- *** RIGHT JOIN
SELECT * FROM cities AS c RIGHT JOIN countries AS ct ON c.countries_code = ct.code ORDER BY c.name;

-- FULL JOIN
-- full join - I can't use FULL JOIN keyword, not valid synatx
-- SELECT * FROM cities AS c FULL JOIN countries AS ct ON c.countries_code = ct.code;

SELECT * FROM cities AS c LEFT JOIN countries AS ct ON c.countries_code = ct.code
UNION SELECT * FROM cities AS c RIGHT JOIN countries AS ct ON c.countries_code = ct.code;