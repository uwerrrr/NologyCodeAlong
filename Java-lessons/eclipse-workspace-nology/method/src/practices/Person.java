package practices;

public class Person {
	private String firstName;
	private String lastName;
	private String middleName;

	public Person(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public Person(String firstName, String middleName, String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;

	}

	public String fullName() {
		if (this.middleName == null) {
			return this.firstName + " " + this.lastName;
		}

		return String.format("%s %s %s", this.firstName, this.middleName, this.lastName);
	}

}
