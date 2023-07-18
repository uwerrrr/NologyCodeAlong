package interfaces.interfaces;

public interface MakesSound {
	// In here I put method signatures, no implementations
	// each class that will IMPLEMENT the interface, needs to provide the methods implementation
	public String sound();
	
	// interfaces can have fields but they are FINAL (similar to constant)
	// -> can NOT update value
	// not commonly used
	String sound = "some sound";
}
