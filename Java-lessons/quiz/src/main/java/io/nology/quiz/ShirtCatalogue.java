package io.nology.quiz;

public class ShirtCatalogue <T extends IClothing> {
    public IClothing[] shirts;

    //  This code has been commented out to prevent it creating build errors
    //  Uncommenting this code is expected when you get to the appropriate question and is not the correct answer!
    
    public char getShirtSizeOfIndex(int index) {
        return shirts[index].getSize();
    }
    
}
