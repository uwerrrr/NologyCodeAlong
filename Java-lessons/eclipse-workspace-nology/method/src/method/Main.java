package method;

public class Main {

	public static void main(String[] args) {
		int sum = Maths.add(5, 5);
		System.out.println("The sum is " + sum);
		try {
			int result = Maths.divide(10, 0);
			System.out.println(result);
		} catch (ArithmeticException e) {
			System.out.println("Don't divide by zero");

		} catch (Exception e) {
			System.out.println("Something else went wrong");
		}

		System.out.println("My program can keep running");
		Animal fluffy = new Animal("Cat", "Fluffy", "Meow");
		Animal fido = new Animal("Dog", "Fido", "Woof");
		fluffy.printDetails();
		fido.printDetails();
		fluffy.makeSound();
		fido.makeSound();

	}

}
