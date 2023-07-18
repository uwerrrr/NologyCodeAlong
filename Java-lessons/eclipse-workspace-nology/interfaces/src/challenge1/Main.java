package challenge1;

public class Main {

	public static void main(String[] args) {
		Car myCar = new Car(20); // miles/h
		Bike myBike = new Bike(10); // km/h
		
		// polymorphism
		Vehicle[] myVehicles = {myCar, myBike};
		
		for (Vehicle vehicle: myVehicles) {
			System.out.println( "My " + vehicle.getType() + " speed is: " + vehicle.getSpeed() + " miles/h");
			
			int decresingSpeed = 5;
			vehicle.decreaseSpeed(decresingSpeed);
			
			System.out.println( "My " + vehicle.getType() + " decreased speed by " + decresingSpeed + " miles/h is: " + vehicle.getSpeed() + " miles/h");
		}
	}
}
