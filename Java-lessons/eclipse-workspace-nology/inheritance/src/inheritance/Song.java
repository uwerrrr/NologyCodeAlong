package inheritance;

public class Song extends Track {
	
	String artist;
	
	public Song(String title, 
			float length, 
			String extension, 
			String artist) {
		super(title, length, extension);
		this.artist = artist;
	}
	
	@Override
	public void printTrackInfo() {
		System.out.printf("The song %s is by artis %s\n", 
				this.title, this.artist);
	}
}
