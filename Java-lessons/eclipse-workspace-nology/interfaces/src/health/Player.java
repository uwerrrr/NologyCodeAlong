package health;

public class Player {
	
	public int health;
	public final int max = 100;
	
	public Player() {
		this.health = 100;
	}
	
	public void setHealth(int health) {
		if(health > this.max) {
			this.health = max;
		} else if(health < 0) {
			this.health = 0;
		} else {
			this.health = health;
		}
	}
	
}
