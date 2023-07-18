package challenge1;

public abstract class Phone {
	public String phoneNumber;
	
	public void call(Phone phone) {
		System.out.println(this.phoneNumber + " calls " + phone);
	}
}
