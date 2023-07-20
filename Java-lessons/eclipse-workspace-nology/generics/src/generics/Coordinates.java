package generics;

// Java Generics supports multiple bounds also, i.e., 
// In this case, A can be an interface or class. 
// If A is class, then B and C should be interfaces. 
// We can’t have more than one class in multiple bounds.
public class Coordinates<T extends Number & Comparable<T>> {
    // The constraint "T extends Number" ensures that type parameter "T" is a subclass of "Number".
    		// -> type parameter "T" can be any numeric type like Integer, Double, Float, etc.

    // The constraint "& Comparable<T>" ensures that type parameter "T" implements "Comparable" interface.
    		// -> type parameter "T" have methods like compareTo().

    // These bounds ensures that "T" is a numeric type that can be compared with other instances of "T".
	
	protected T x;
	protected T y;
	
	public Coordinates(T x, T y) {
		this.x = x;
		this.y = y;
	}
}
