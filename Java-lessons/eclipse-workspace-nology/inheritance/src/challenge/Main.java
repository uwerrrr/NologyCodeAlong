package challenge;

public class Main {

	public static void main(String[] args) {
		Teacher[] teachers = {
				new Teacher("McGonagall"),
				new Teacher("Snape")
		};
		
		Student[] students = {
				new Student("Harry", "Gryffindor"),
				new Student("Hermione", "Gryffindor"),
				new Student("Ron", "Gryffindor")};
		
		Person[] people = new Person [teachers.length + students.length];
		people[0] = teachers[0];
		people[1] = teachers[1];
		people[2] = students[0];
		people[3] = students[1];
		people[4] = students[2];
		
		for (Person person : people) {
			person.sayYourName();
		}
		
		// both teachers have a meeting with each student 
		for (Teacher teacher : teachers) {
			for(Student student : students) {									teacher.callMeeting(student.getName());
			}	
		}
	}

}

/*
 * Challenge 
Create a parent class called person, they have a property called name that is set in their constructor
person has a method called say your name
Create a child class called student that inherits from person
Create a child class called teacher that inherits from person
students have a property called cohort, which is a string
When a student says their name, they should also mention which cohort they are in
Teachers have a method called call meeting, which takes a person and prints both the teacher and the persons name to the console
create a teacher called Alex and a teacher called Calum
create 3 students
Put all 5 in an array and make them say their name
Make Calum and Alex have a meeting
Make both teachers have a meeting with a student each
 */