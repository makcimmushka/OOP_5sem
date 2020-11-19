import components.ClassInfoPrinter;
import utils.Utils;

public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        ClassInfoPrinter classInfoPrinter = new ClassInfoPrinter();

        classInfoPrinter.printClassInfo(Utils.getFilePathTestClass1());
        classInfoPrinter.printClassInfo(Utils.getFilePathTestClass2());
    }
}