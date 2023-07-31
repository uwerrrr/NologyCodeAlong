package io.nology.quiz;

// In the code that was sent to you, there are two classes Pig and Dog. Both classes represent certain animals and contain the same method with different implementations. What OOP pillar and java feature could I use to make this code easier to work with?
public class Dog {
	int meals = 0;
	int hasBeenWalked = 0;

	// Dog is only allowed 3 meals a day
	public Boolean feed() {
		if (this.getMeals() <= 3) {
			return false;
		}

		this.setMeals(this.getMeals() + 1);
		return true;
	}

	public int getHasBeenWalked() {
		return hasBeenWalked;
	}

	public void setHasBeenWalked(int hasBeenWalked) {
		this.hasBeenWalked = hasBeenWalked;
	}

	public int getMeals() {
		return meals;
	}

	public void setMeals(int meals) {
		this.meals = meals;
	}

}