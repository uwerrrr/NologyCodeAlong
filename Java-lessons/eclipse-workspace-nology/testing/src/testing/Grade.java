package testing;

public class Grade {
	private int points;
	private boolean isPassing;
	private final int THRESHOLD = 50;
	
	Grade() {}
	Grade(int points) {
		this.points = points;
		this.setPassing();
	}

	public void setPassing() {
		this.isPassing = this.points >= THRESHOLD;
	}
	public boolean getIsPassing() {
		return this.isPassing;
	}
	
	public void setPoints(int points) throws PointsOutOfRange {
		// throws PointsOutOfRange: indicates this method might throw exception PointsOutOfRange
		
		if(points < 0 || points > 100) {
			throw new PointsOutOfRange("Invalid points amount");
		}
		
		this.points = points;
		this.setPassing();
	}
	
	public int getPoints() {
		return points;
	}

	
	public char calculateGrade(int points) {
		if(points > 80) {
			return 'a';
		} else if(points > 60) {
			return 'b';
		} else if(points > 40) {
			return 'c';
		} else {
			return 'd';
		}
	}
}
