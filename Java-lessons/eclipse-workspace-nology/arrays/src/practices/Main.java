package practices;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
//		int[] numbers = new int[3];
//		numbers[0] = 2;
//		numbers[1] = 4;
//		numbers[2] = 6;
//	
//		
//		System.out.println("numbers: " + Arrays.toString(numbers));
//		System.out.println("incremented numbers: " + Arrays.toString(ArrayUtils.incrementArr(numbers)));
//		System.out.println("reversed numbers: " + Arrays.toString(ArrayUtils.reverseArr(numbers)));
//		
		
		
		// Multi dimensional Arr
		
		int[][] gridArr = { { 1, 2 }, { 3, 4 } };
		for (int i = 0; i < gridArr.length; i++) {

			int[] row = gridArr[i];

			for (int j = 0; j < row.length; j++) {
				System.out.println("The value is " + row[j]);
			}
		}
		
		
		//
		// Challenge
		int a, b, c, d;
		a = 2;
		b = 2;
		c = 3;
		d = 4;
		
		int [][][][] fourDArray = new int[a][b][c][d];
		// a, b, c, d are length of each dimension
		// len 1st d = 2
		// len 2nd d = 2
		// len 3rd d = 3
		// len 4th d = 4
		
		// [ 
		//	[ [1,2,3,4],[1,2,3,4],[1,2,3,4] ],
		// 	[ [1,2,3,4],[1,2,3,4],[1,2,3,4] ] 
		// ],
		// [ 
		//	[ [1,2,3,4],[1,2,3,4],[1,2,3,4] ],
		// 	[ [1,2,3,4],[1,2,3,4],[1,2,3,4] ] 
		// ]
		
		
		
		int num = 1;
		for ( int i = 0; i < a; i++) {
			for (int j = 0; j < b; j ++) {
				for (int k = 0; k < c; k ++) {
					for (int l = 0; l < d; l ++) {
						fourDArray[i][j][k][l] = num;
						++num;
					}
				}
			}
		
		}
		
		for ( int i = 0; i < a; i++) {
			for (int j = 0; j < b; j ++) {
				for (int k = 0; k < c; k ++) {	
					System.out.println(Arrays.toString(fourDArray[i][j][k]));
				}
			}
		}
		

/* Use for loops to fill a 4 dimensional array with incremented values
[
    [
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ],
        [
            [13, 14, 15, 16],
            [17, 18, 19, 20],
            [21, 22, 23, 24]
        ]
    ],
    [
        [
            [25, 26, 27, 28],
            [29, 30, 31, 32],
            [33, 34, 35, 36]
        ],
        [
            [37, 38, 39, 40],
            [41, 42, 43, 44],
            [45, 46, 47, 48]
        ]
    ]
]

*/
	}

}
