package practices;

public class Main {

	public static void main(String[] args) {
		Person me = new Person("Alex", "Patrick", "Baulderstone");
		System.out.println(me.fullName());
	
		System.out.println(Area.findArea(14.0));
		System.out.println(Area.findArea(5.0, 4.0));
	}


}
