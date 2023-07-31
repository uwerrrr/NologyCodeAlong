USE world_x;

-- CREATE DATABASE and TABLES
CREATE DATABASE nology_students;
SHOW DATABASES;

USE nology_students;
SHOW TABLES;

-- ONE TO MANY
-- 1 student can have 1 cohort
-- 1 cohort can have many students
CREATE TABLE cohorts(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cohorts(name) VALUES ('Uruguay'), ('Tanzania'), ('Samoa'), ('Vanuatu');
SELECT * FROM cohorts;

DROP TABLE cohorts;

CREATE TABLE students(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- Student ID, auto-incremented, cannot be NULL
    first_name VARCHAR(25) NOT NULL, -- Student's first name, maximum length of 25 characters, cannot be NULL
    cohort_id INT UNSIGNED NOT NULL, 
		-- UNSIGNED: not allow negative numbers
		-- INT value range from -2,147,483,648 to 2,147,483,647
        -- INT UNSIGNED -> value range from 0 to 4,294,967,295
    PRIMARY KEY(id), -- Primary key constraint on the 'id' column, making it the primary identifier for each student
    FOREIGN KEY(cohort_id) REFERENCES cohorts(id) -- set cohorts_id col as foreign key nreference to id col in cohorts table
);

INSERT INTO students(first_name, cohort_id) VALUES ('Kai', 2), ('Inga', 2), ('Sunny', 4);
SELECT * FROM students;
SELECT * FROM cohorts AS c INNER JOIN students AS s ON c.id = s.cohort_id;


-- ONE TO one
-- 1 student can have 1 address
-- 1 address can have 1 student
CREATE TABLE addresses(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    student_id INT UNSIGNED NOT NULL UNIQUE, -- Unique constraint to ensure one address per student
    street VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(student_id) REFERENCES students(id) -- set student_id col as foreign key reference to id col in students table
);

INSERT INTO addresses(student_id, street, city, postal_code)
VALUES
    (1, '123 Main Street', 'Springfield', '12345'),
    (2, '456 Oak Avenue', 'TanzanCity', '67890'),
    (3, '789 Elm Lane', 'Vanuatuville', '13579');

SELECT * FROM addresses;
SELECT * FROM students AS s INNER JOIN addresses AS a ON s.id = a.student_id;



-- MANY TO MANY
-- 1 student can have many projects
-- 1 projects can have many students
-- -> intermediary table: students_projects
	-- 1 students_projects can have 1 project
	-- 1 students_projects can have 1 student
	-- 1 project can have many students_projects
	-- 1 student can have many students_projects
CREATE TABLE projects(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE students_projects(
    student_id INT UNSIGNED NOT NULL,
    project_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(student_id, project_id),
    FOREIGN KEY(student_id) REFERENCES students(id),
    FOREIGN KEY(project_id) REFERENCES projects(id)
);

INSERT INTO projects(project_name) VALUES
    ('Database Management System'),
    ('Web Development Project'),
    ('Mobile App Development'),
    ('Data Analysis Project');

INSERT INTO students_projects(student_id, project_id) VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (3, 3),
    (3, 4);

SELECT * FROM students_projects;
SELECT * FROM students AS s 
	INNER JOIN students_projects AS sp ON s.id = sp.student_id
	INNER JOIN projects AS p ON sp.project_id = p.id;
SELECT * FROM projects AS p 
	INNER JOIN students_projects AS sp ON p.id = sp.project_id
	INNER JOIN students AS s ON sp.student_id = s.id;
SELECT * FROM students_projects AS sp 
	INNER JOIN projects AS p ON sp.project_id = p.id
	INNER JOIN students AS s ON sp.student_id = s.id;












