package interfaces;

import interfaces.interfaces.MakesSound;
import interfaces.interfaces.DoesEat;

public class Cat implements MakesSound, DoesEat {

	@Override
	public String sound() {
		return "Meow";
	}

	@Override
	public String eat() {
		return "fish";
	}
}
