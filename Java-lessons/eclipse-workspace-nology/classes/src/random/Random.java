package random;

import classes.Person;

public class Random {

	public static void main(String[] args) {

		Person person1 = new Person();
		// this poses errors because scope of instance variables name and age in class Person is private 
//		person1.name = "Alice";
//		person1.age = 20;
//		System.out.println(person1.name);
//		System.out.println(person1.age);
	}

}
