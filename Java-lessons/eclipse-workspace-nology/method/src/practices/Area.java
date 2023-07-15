package practices;

public class Area {

	// Doc Comments
	/**
	 * This is for finding the area of a circle
	 */
	static double findArea(double radius) {
		return Math.PI * Math.pow(radius, 2);
	}

	static double findArea(double length, double width) {
		return length * width;
	}

	static double findArea() {
		return 0.0;
	}
}	
