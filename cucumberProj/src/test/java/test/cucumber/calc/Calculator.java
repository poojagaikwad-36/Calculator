package test.cucumber.calc;

public class Calculator {
	private int N1;
	private int N2;

	public Calculator(int int1, int int2) {
		this.N1 = int1;
		this.N2 = int2;
	}
	public int multiply(){
		return (int) (N1 * N2);
	}
	public int divison(){
		return (int) (N1 / N2);
	}
	public int add() {
		return  (int) (N1 + N2);
	}
	public int subtract() {
		return (int) (N1 - (N2));
	}

}