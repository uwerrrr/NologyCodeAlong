package inheritance;

// What is inheritance?

// To receive something, usually from a parent
// Let's say we have two or more classes
// they share certain functionality
// parent class
// child class can extend the parent class
// they will inherit all the methods and public and protected fields from the parent class

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		MyParentClass parent = new MyParentClass(123.123f);
		MyChildClass child = new MyChildClass(23.23f);
		
		parent.parentMethod();
		child.parentMethod();
		
		child.childMethod();
		System.out.println(child.data);
		System.out.println(parent.data);

		
//		parent.childMethod(); child class inherits from parent
		// but parent class does not have access to child methods
		String[] guests = { "Jeff" };
		Podcast programmingPodcast = new Podcast(
				"Software Engineering Daily", 
				1.5f, "mp3", guests);
		
		Song someSong = new Song("faint", 
				0.01f, "mp3", "Linkin park");
		
		programmingPodcast.printTrackInfo();
		someSong.printTrackInfo();
		System.out.println(programmingPodcast.getFileName());
		System.out.println(someSong.getFileName());
		
//		This won't work, error from podcast
//		Song[] songs = { someSong, programmingPodcast };
		
//		This won't work, error from song
//		Podcast[] podcasts = { programmingPodcast, someSong };
		
		// Polymorphism
		Track[] tracks = { someSong, programmingPodcast };
	}

}
