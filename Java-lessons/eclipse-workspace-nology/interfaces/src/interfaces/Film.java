package interfaces;

public class Film implements IMedia {
	
	String title;
	short yearReleased;
	String[] characters;
	
	
	public Film(String title, short yearReleased, String[] characters) {
		this.title = title;
		this.yearReleased = yearReleased;
		this.characters = characters;
	}

	@Override
	public String getInfo() {
		return String.format("The movie title is %s, "
				+ "it was released in %d", 
				this.title, this.yearReleased);
		
	}

	@Override
	public void getCharacters() {
		System.out.print("The characters that appear in the film are: ");
		for(int i = 0; i < characters.length; i++) {
			if(i == characters.length - 1) {
				System.out.print(characters[i] + ".");
			} else {
				System.out.print(characters[i] + ", ");				
			}

		}
		
	}

}
