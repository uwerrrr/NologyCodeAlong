package abstracts;


// What are abstract classes?
// a blueprint of a class
// what a class should do, what properties it will have, methods with implementation
// we cannot instantiate an abstract class

// I won't be able to have Account account = new Account()
// but I will be able to have SavingAccount savingsAccount = new SavingsAccount();

public class Main {

	public static void main(String[] args) {
		EverydayAccount everydayAcc = new EverydayAccount(1000);
		everydayAcc.printBalance();
		
		SavingsAccount savingsAcc = new SavingsAccount(20000);
		savingsAcc.printBalance();
		
		System.out.println(everydayAcc.getBalanceAfterYears(2));
		System.out.println(savingsAcc.getBalanceAfterYears(3));

	}

}
