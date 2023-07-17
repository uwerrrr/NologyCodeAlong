package inheritance;

public class MyChildClass extends MyParentClass {
	
	// the child class needs its own constructor, 
	// it does not inherit the parent constructor
	public MyChildClass(float data) {
		super(data);
	}
	
	public void childMethod() {
		System.out.println("Child method");
	}

}
