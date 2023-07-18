package abstracts;

abstract class Account {
	
	//// we can define instances in abstract class -> child class can update their value - similar to inheritance
	// each account will have some balance
	double balance;
	
	//// we can define abstract methods in abstract class - similar to interface
	// the interest rate will be different for every account (will return a different number)
	// that's why we add an abstract method, so each class can implement it differently
	abstract double getInterestRate();
	
	
	// We can have methods with implementation in abstract class -> child class can inherit the method - similar to inheritance
	// it allows me to reduce code repetition
	public double getBalanceAfterYears(int years) {
		
		for(int i = 0; i < years; i++) {
			balance += balance * this.getInterestRate();
		}
		
		return this.balance;
	}
	
	public void printBalance() {
		System.out.println("The balance is " + this.balance + " dollars");
	}
}
