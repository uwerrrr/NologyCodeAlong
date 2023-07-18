package health;

public class Main {

	public static void main(String[] args) {
		
		Player newPlayer = new Player();
		System.out.println(newPlayer.health);
		
		Arrow arrow = new Arrow();
		arrow.apply(newPlayer);
		System.out.println(newPlayer.health);
		
		HealthPotion healthPotion = new HealthPotion();
		healthPotion.apply (newPlayer);
		System.out.println(newPlayer. health);
	}

}
