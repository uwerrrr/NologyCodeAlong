package interfaces;

public class WIthSuperInterfaces implements SecondInterface {

	@Override
	public String secondInterfaceMethod() {
		return "Hello";
	}
	
	// class implements SecondInterface but also needs to have methods from FirstInterface
	@Override
	public void firstInterfaceMethod() {
		System.out.println("hi");
	}
}
