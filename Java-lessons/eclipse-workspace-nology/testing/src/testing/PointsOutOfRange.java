package testing;

// we can set custom exception with custom message
// we will create a class to contain the custom exception

public class PointsOutOfRange extends Exception{
	// extends to Exception class 
	
	private static final long serialVersionUID = 1L;
	
	public PointsOutOfRange(String message) {
		super(message);
	}
}
