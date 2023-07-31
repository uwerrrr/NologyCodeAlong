package io.nology.quiz;

import java.util.List;
import java.util.stream.Stream;

public class StringUtils {

	// Here is an implementation of reversing a string. It works but there is a lot of code here that is hard to maintain? What would be a better way to reverse a string without having to write so much code?
	public String reverse(String str) {
//		String newStr = "";
//
//		for (int i = str.length(); i >= 0; --i) {
//			newStr += str.charAt(i);
//		}
//	
//		
//		return newStr;
//		
		return new StringBuilder(str).reverse().toString();
	}

	// Here is a palindrome checker, currently this function is very readable but it is not efficient at all. How could I refactor this code to make it more efficient?

	// What makes it inefficient?
	public Boolean isPalindrome(String str) {
//		String rev = new StringBuilder(str).reverse().toString();
//		return rev.equalsIgnoreCase(str);
		
		 int head = 0;
		 int tail = str.length() - 1;
		 
		 boolean isPalindrome = true;
		 
		 while (head < tail) {
		    if (str.charAt(head) == str.charAt(tail)) {
		      head++;
		      tail++;
		    } else {
		      isPalindrome = false;
		      break;
		    }
		  }
			  return isPalindrome;
	}
		// at maximum, loop through half of the string only
		// when false, break the loop immediately 
		// no waste resource 



	// This is a function that joins an array of strings together. This function is pretty unsafe, and can throw exceptions in certain cases, how can I fix this? This code is also hard to read and hard to maintain. How could I refactor this code to make it simpler?
	public String join(List<String> strs, String delim) {
//		String tmp = strs.get(0);
//
//		for (int i = 1; i < strs.size(); ++i) {
//			tmp = String.format("%s%s%s", tmp, delim, strs.get(i));
//		}

//		return tmp;
		
		if(strs == null) {
			 throw new IllegalArgumentException("Input list cannot be null.");
		}
		
		strs.stream().map((str) -> str == null ? "": str );
		
		return String.join(delim, strs);
	}

	// This function is very efficient but it has three major problems, it only supports the english alphabet and it is incredibly hard to read. How could I make this solution simpler using the java std?
	public String toLowerCase(String str) {
//		String tmp = "";
//
//		for (int i = 0; i < str.length(); ++i) {
//			int code = (int) str.charAt(0);
//			if (code <= 90) {
//				tmp += (char) code - 32;
//			} else {
//				tmp += (char) code;
//			}
//		}
//		return tmp;
		
		return str.toLowerCase();
	}
}
