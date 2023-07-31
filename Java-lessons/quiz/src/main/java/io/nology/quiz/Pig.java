package io.nology.quiz;

import java.util.Calendar;

public class Pig {
	// Pig can only be fed in the morning
	public Boolean feed() {
		Calendar c = Calendar.getInstance();
		int timeOfDay = c.get(Calendar.HOUR_OF_DAY);

		if (timeOfDay < 12) {
			return true;
		}

		return false;
	}
}