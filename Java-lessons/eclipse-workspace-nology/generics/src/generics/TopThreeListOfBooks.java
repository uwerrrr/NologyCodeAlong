package generics;

public class TopThreeListOfBooks {
	
	Book[] favBooks = new Book[3];
	
	public TopThreeListOfBooks(Book book1, Book book2,
			Book book3) {
		favBooks[0] = book1;
		favBooks[1] = book2;
		favBooks[2] = book3;
	}

}
