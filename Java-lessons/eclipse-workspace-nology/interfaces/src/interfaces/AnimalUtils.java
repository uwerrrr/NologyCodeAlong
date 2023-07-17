package interfaces;

public class AnimalUtils {
	
	public static void printAnimalInfo(MakesSound animal) {
		// I am guaranteed that everything that makes sound
		// has the sound method
		// so I can call it without worrying that the code will break
		System.out.println("The animal's sound is: " 
	+ animal.sound());
	}

}
