package stream;

import java.util.ArrayList;
import java.util.Optional;

public class Consultant {
	
	private String name;
	private String location;
	private Double salary;
	public static Integer count = 0;
	private Integer ID;
	
	
	// let's pretend this is from a database
	static ArrayList<Consultant> consultants = new ArrayList<>();
	
	// when I create a new consultant, 
	// I also want to add them
	// to my consultants arrayList
	public Consultant(String name, String location) {
		this.name = name;
		this.location = location;
		this.ID = ++count;
		this.salary = 50000.00;
		consultants.add(this);
	}
	
	// a method that will allow me to find a consultant by id
	// maybe there is a consultant with a specified id, maybe there ins't 
	// -> Optional (method returns optional)
	public static Optional<Consultant> findById(Integer id) {
		return consultants.stream().filter(c -> c.ID == id)
				.findFirst();
	}
	
	// returns the sum of all consultants salaries
	public static Double totalSalaryCost() {
		return consultants.stream()
				.mapToDouble(c -> c.getSalary())
				.sum();
	}
	
	public static Double calculateAverage() {
		return consultants.stream()
				.mapToDouble(c -> c.getSalary())
				.average()
				.orElse(0.00);
	}
	
	// I want to print consultants details to the console
	@Override
	public String toString() {
		return "Consultant [name = " + name + " salary " + salary 
				+ " ID " + ID + "]";
	}
	
	public static ArrayList<Consultant> getConsultants() {
		return consultants;
	}
	
	public void increaseSalary(Double payrise) {
		this.salary += payrise;
	}
	
	public void increaseBy5k() {
		this.salary += 5000.00;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public Integer getID() {
		return ID;
	}

	public void setID(Integer iD) {
		ID = iD;
	}
}
