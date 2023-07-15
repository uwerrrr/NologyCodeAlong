package method;

public class Animal {
	private String breed;
	private String name;
	private String sound;
	
	public Animal(String breed, String name, String sound) {
		this.breed = breed;
		this.name = name;
		this.sound = sound;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	private String getSound() {
		return sound;
	}

	public void setSound(String sound) {
		this.sound = sound;
	}
	
	public void printDetails() {
		System.out.println(String.format("%s is a %s and they make %s sounds", this.name, this.breed, this.sound));
	}

	public void makeSound() {
		// getSound is a private method but we can use it in the same class
		System.out.println(this.getSound() + "!!!!");
	}
}
