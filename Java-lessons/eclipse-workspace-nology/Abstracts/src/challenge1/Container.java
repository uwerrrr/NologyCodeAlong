package challenge1;

public abstract class Container {
	
	protected int waterFor1Spoon = 150;
	protected int volume;
	
	public double getVolume() {
		return this.volume;
	};
	
	public double teaspoonCount() {
		return this.getVolume() / waterFor1Spoon;
	};
}
