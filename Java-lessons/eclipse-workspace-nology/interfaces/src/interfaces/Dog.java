package interfaces;

import interfaces.interfaces.MakesSound;
import interfaces.interfaces.DoesEat;

public class Dog implements MakesSound, DoesEat {
	// implements MakesSound interface -> Dog class must have public String sound() method
	
	@Override
	public String sound() {
		return "Woof";
	}

	@Override
	public String eat() {
		return "meat";
	}
}
