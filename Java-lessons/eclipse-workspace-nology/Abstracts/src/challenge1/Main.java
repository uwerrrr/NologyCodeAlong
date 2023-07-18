package challenge1;

public class Main {

	public static void main(String[] args) {
		// coffee glasses
		LatteGlass grande = new LatteGlass();
		System.out.println(grande.getVolume());
		System.out.println(grande.teaspoonCount());
		
		Mug venti = new Mug();
		System.out.println(venti.getVolume());
		System.out.println(venti.teaspoonCount());
		
		ShortGlass tall = new ShortGlass();
		System.out.println(tall.getVolume());
		System.out.println(tall.teaspoonCount());	
		
		
		
		// Phone
		Mobile firstMobile = new Mobile("0123456789");
		Mobile secondMobile = new Mobile("0455784623");
		Landline firstLandline = new Landline("0455784623", "123 Sydney Street");
		
		System.out.println("firstMobile texts secondMobile");
		firstMobile.text(secondMobile, "Hey there");
		
		System.out.println("firstLandline calls firstMobile");
		firstLandline.call(firstMobile);
	}
}
