package intro;

public class Casting {

	public static void main(String[] args) {
		// Casting values
		// converting one data type into another
		byte byte1 = 12; // I can turn this into another data type
		short short1 = (short) byte1;
		System.out.println(short1);

		// be careful with casting! We can lose data when casting - which can lead to
		// bugs
		short short2 = 300;
		byte byte2 = (byte) short2;
		// we get overflow
		System.out.println(byte2); // 44
		// that extra information is lost forever
		short short3 = (short) byte2;
		System.out.println(short3); // 44
		// we just lost the fact that our original short was 300

		// we can cast more than just numbers
		int charCode = (int) 'B';
		System.out.println(charCode);

		// IN ORDER TO NOT LOSE INFORMATION
		// FOLLOW THESE RULES
		// We can only cast from smaller to bigger
		// boolean (1 bit) -> byte, short, int, long, float, double, char
		// byte (8 bit signed) -> short, int, long, float, double, char
		// short(16 bit signed) -> int, long, float, double, char
		// char(16 bit unsigned) -> int, long, float, double
		// int (32 bit signed) -> long, float, double
		// long (64 bit signed) -> double
		// float (32 bit) -> long double

	}

}
