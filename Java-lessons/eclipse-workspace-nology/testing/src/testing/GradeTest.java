package testing;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class GradeTest {
	
	// instead of having to repeatedly create a grade instance in each test everytime 
	// we can use annotation @BeforeEach
	static Grade notPassingGrade;
	static Grade passingGrade;
	static Grade grade;
	
	@BeforeEach
		// before each test -> execute this method
	public void setUp() {
		notPassingGrade = new Grade(45);
		passingGrade = new Grade(80);
		grade = new Grade();
	}

	@Test
	public void setPassing_PointsBelow50_SetsToFalse(){
		assertFalse(notPassingGrade.getIsPassing());
	}
	
	@Test
	public void setPassing_PointsAbove50_SetsToTrue() throws PointsOutOfRange {
		// indicates the method might throw exception PointsOutOfRange
		assertTrue(passingGrade.getIsPassing());
	}
	
	@Test
	public void calculateGrade_PointBelow50_ReturnsC() throws PointsOutOfRange {
		char returnedGrade = 'c';
		char actual = notPassingGrade.calculateGrade(
				notPassingGrade.getPoints());
		assertEquals(returnedGrade, actual);
	}
	
	// error exception test
	@Test
	public void setPoints_PointsBelow0_ThrowsPoinstOutOfRageException() {
		assertThrows(PointsOutOfRange.class, () -> grade.setPoints(-1));
		// expect grade.setPoints(-1) to throw exception PointsOutOfRange
	}
	
}
