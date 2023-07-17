package challenge;

public class Teacher extends Person{
	public Teacher(String name) {
		super(name);
	}
	
	public Teacher() {
		super();
	}

	public void callMeeting(String Person) {
		System.out.printf("%s called %s. \n", this.name, Person);
	}
}
