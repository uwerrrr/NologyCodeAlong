package inheritance;

public class Podcast extends Track {
	String[] guests;
	
	public Podcast(String title, 
			float length, 
			String extension, String[] guests) {
		super(title, length, extension);
		this.guests = guests;
	}
}
