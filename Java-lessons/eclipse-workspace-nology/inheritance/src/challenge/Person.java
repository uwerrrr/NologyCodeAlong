package challenge;

public class Person {
	protected String name;
	
	public Person (String name) {
		this.name = name;
	}
	
	public Person () {
		this.name = "unknown";
	}

	public String getName() {
		return name;
	}

	public void sayYourName() {
		System.out.println(this.name);
	}	
}
