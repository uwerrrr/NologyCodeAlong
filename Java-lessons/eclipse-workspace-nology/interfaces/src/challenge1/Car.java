package challenge1;

public class Car implements Vehicle {
	
	protected float speed; // miles/h
	protected String type; 
	
	public Car() {
		this.speed = 0;
		this.type = "car";
	}
	
	public Car(float speed) {
		this.speed = speed;
		this.type = "car";
	}
	
	public void setSpeed(float speed) {
		this.speed = speed;
	}
	
	@Override
	public String getType() {
		return this.type;
	}
	
	@Override
	public float getSpeed() {

		return this.speed;
	}

	@Override
	public float decreaseSpeed(float s) {
		return this.speed = this.speed - s;
	}
}
