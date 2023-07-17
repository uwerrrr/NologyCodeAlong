package interfaces;

public class Dog implements MakesSound {
	// implements MakesSound interface -> Dog class must have public String sound() method
	
	@Override
	public String sound() {
		return "Woof";
	}
}
