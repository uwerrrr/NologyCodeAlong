package classes;

public class Person {
    // Instance variables
    private String name; // Represents the name of the person
    private byte age; // Represents the age of the person

    
    //// Constructors 
    // Constructor with parameters
    public Person(String name, int age) {
        this.name = name; // Initialize the name with the provided value
        this.age = (byte) age; // Initialize the age with the provided value (casted to byte)
    }

    // Default constructor
    public Person() {
        this.name = "Person"; // Set a default name
        this.age = 10; // Set a default age
    }

    
    //// Getter methods 
    // Getter method for name
    public String getName() {
        return this.name; // Return the value of name
    }
    
    // Getter method for age
    public byte getAge() {
        // We can alter information here if needed as well
        return this.age; // Return the value of age
    }

    
	//// Setter methods
    /**
     * Sets the name of the object.
     *
     * @param newName the new name to set Constraint: name must be >= 3 chars
     */
    public void setName(String newName) {
        // Some logic around setting a name
        // Length validation
        if (newName.length() < 3) {
            return; // Return without setting the name if it is less than 3 characters
        }
        this.name = newName; // Set the new name
    }

 
}
