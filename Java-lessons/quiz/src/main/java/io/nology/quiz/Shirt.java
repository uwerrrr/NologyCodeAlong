package io.nology.quiz;

public class Shirt implements IClothing {
    public char size = 'M';

    public char getSize() {
        return size;
    }

    public float getPrice() {
        return 15.99f;
    }
}
