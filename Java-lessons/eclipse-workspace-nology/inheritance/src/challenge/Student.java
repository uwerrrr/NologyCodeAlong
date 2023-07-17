package challenge;

public class Student extends Person {
	protected String cohort;
	public Student(String name, String cohort) {
		super(name);
//		By calling super(name), the constructor of the Person class is executed, allowing the name parameter to be passed to the Person class and initialized.
		this.cohort = cohort;
	}
	
	public Student() {
		super();
		this.cohort = "unkown";
	}
	
	public void sayYourName() {
		System.out.println(this.name + " from " + this.cohort);
	}
	
}
