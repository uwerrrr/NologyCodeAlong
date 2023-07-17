package challenge1;

public class Bike implements Vehicle {
	
	protected float speed; // km/h
	protected float speedMH; // m/h
	protected String type; 
	
	public Bike() {
		this.speed = 0;
		this.speedMH = 0;
		this.type = "bike";
	}
	
	public Bike(float speed) {
		this.speed = speed;
		this.speedMH = (float) (this.speed * 0.621371192);
		this.type = "bike";
	}
	
	public void setSpeed(float speed) {
		this.speed = speed;
	}
	
	@Override
	public String getType() {
		return this.type;
	}
	
	@Override
	public float getSpeed() { // miles/h
		
		return this.speedMH;
	}

	@Override
	public float decreaseSpeed(float s) {
		
		return this.speedMH = this.speedMH - s;
	}
}
