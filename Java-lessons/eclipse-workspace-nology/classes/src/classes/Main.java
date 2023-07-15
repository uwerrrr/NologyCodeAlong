package classes;

public class Main {

	public static void main(String[] args) {

		
		Person me = new Person("Alex", 35);
		me.setName("alefefef");
		System.out.println(me.getName()); // alefefef
		System.out.println(me.getAge()); // 35
		
		
		Person cal = new Person("Calum", 25);
		System.out.println(cal.getName()); // Calum
		System.out.println(cal.getAge()); // 25

	}

}
