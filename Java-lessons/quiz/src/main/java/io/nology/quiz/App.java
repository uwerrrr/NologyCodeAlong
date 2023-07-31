package io.nology.quiz;

import java.util.stream.IntStream;
import java.util.stream.Stream;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	System.out.println("quiz: ");
        System.out.println("7 == \"7\" = " + 7 == "7");
        System.out.println("7 == \" 7 \" = ");
    }

    public static float power(int voltage, float current) {
        return (float) voltage * current;
    }

    public static int[] myMethod (int[] numbers) {
//        int[] newArray = new int[numbers.length];
//        for (int i = 0; i < numbers.length; i++) {
//            newArray[i] = numbers[i] + 1;
//        }
//        return newArray;
        
    	return IntStream.of(numbers)
    			.map(num -> num + 1)
    			.toArray();
        // increment all items in int[] numbers by 1
    }
}
