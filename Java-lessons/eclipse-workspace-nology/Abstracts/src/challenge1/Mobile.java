package challenge1;

public class Mobile extends Phone {
	
	public Mobile(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public void text(Mobile mobile, String mess) {
		System.out.println(this.phoneNumber + " texts " + mess + " to " + mobile);
	}
}
