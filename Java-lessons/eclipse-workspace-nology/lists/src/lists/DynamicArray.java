package lists;

import java.util.Arrays;

public class DynamicArray {
	private int[] data;
	private int length = 0;
	private int buffer;

	public DynamicArray() {
		this.buffer = 5; // initial max length = 5
		this.data = new int[this.buffer]; // data is actual array
	}

	public void viewContent() {
		System.out.println(Arrays.toString(this.data));
	}

	private void resize() {
		this.buffer *= 2; // double the max length when resize
		this.data = Arrays.copyOf(this.data, this.buffer); 
	}

	public void add(int item) {
		this.data[this.length++] = item; // len ++ for every item added
		if (this.length == this.buffer) { // if array len == max len -> resize
			this.resize();
		} 
	}

	public int size() {
		return this.length;
	}

	public int get(int index) {
		return this.data[index];
	}
}
