package inheritance;

public class Track {
	
	// here I will put all the stuff that a song and a podcast have in common
	String title;
	float length;
	String exension;
	
	public Track(String title, float length, String extension) {
		this.title = title;
		this.length = length;
		this.exension = extension;
	}
	
	public String getFileName() {
		return this.title + "." + this.exension;
	}
	
	public void printTrackInfo() {
		System.out.printf("%s.%s"
				+ " - %f\n", this.title, this.exension, this.length);
	}
}
