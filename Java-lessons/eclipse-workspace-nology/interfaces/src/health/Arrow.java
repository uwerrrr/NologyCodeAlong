package health;

public class Arrow implements ApplyEffect {

	@Override
	public void apply(Player player) {
		player.setHealth(player.health - 25);
	}

}
