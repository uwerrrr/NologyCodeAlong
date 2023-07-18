package abstracts;

public class SavingsAccount extends Account {

	public SavingsAccount(double balance) {
		this.balance = balance;
	}
	
	@Override
	double getInterestRate() {
		return 0.05;
	}
	
	// we can override method of abstract class similar to inheritance
	@Override
	public void printBalance() {
		System.out.println("The balance of the savings account is " 
				+ this.balance + " dollars");
	}
}
