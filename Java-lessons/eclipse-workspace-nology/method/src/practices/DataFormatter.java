package practices;

public class DataFormatter {
	public static String formatSeconds(long seconds) {
	    long hours = seconds / 3600;
	    long minutes = (seconds % 3600) / 60;
	    long remainingSeconds = seconds % 60;
	
	    return String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
	    // "%02dh%02dm%02ds" :
	    // 02: minimum 2 digits with leading 0 where necessary 
	    // d: decimal integer
	    // h, m, s: literal characters included in the output string
	}
	
	
}
