package testClasses;

import java.util.ArrayList;

public class TestClass1 extends ArrayList<Integer> {

    private static final String c1 = "";
    public transient volatile Double d1;

    public TestClass1() {}

    private static void class1Method1(int a, char b){
        System.out.println("This is method 1 in class 1");
    }

    public final byte class1Method2(String c, Long d, byte e){
        System.out.println("This is method 2 in class 1");
        return 0;
    }

}
