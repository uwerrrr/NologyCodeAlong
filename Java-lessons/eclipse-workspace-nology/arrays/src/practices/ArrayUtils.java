package practices;

public class ArrayUtils {
	public static int[] incrementArr(int[] Arr) {
		int[] newArr = new int[Arr.length]; 
		for (int i = 0; i < Arr.length; i++) {
			newArr[i] = Arr[i] + 1;
		}
		return newArr;
	}
	static int[] reverseArr(int[] Arr) {
		int[] newArr = new int[Arr.length]; 
		int j = 0;
		for (int i = Arr.length-1; i >= 0; i--) {
			newArr[j] = Arr[i];
			++j;
		}
		return newArr;
		
	}
	
	
}

/* MVP:
Create a class called ArrayUtils
Create a static method that takes in an int[]
... and returns a new int[] where all numbers have been incremented
Input => Output Examples:
{ 1, 2, 3 } => { 2, 3, 4 }
{ 45, 23 } => { 46, 24 }
{ } => { }

Challenge: Reverse Items in an Array
Create a static method that takes in int[] on your ArrayUtils class
... and returns a new int[] where all the items are in the reverse order
Input => Output Examples:
{ 1, 2, 3 } => { 3, 2, 1 }
{ 45, 23 } => { 23, 45 }
{ } => { }
*/