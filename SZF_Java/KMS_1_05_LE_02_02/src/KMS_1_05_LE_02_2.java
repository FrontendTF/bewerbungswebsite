import java.util.Scanner;

public class KMS_1_05_LE_02_2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Geben sie Ihren Namen ein: ");
        String name = scanner.nextLine();
        System.out.print("Geben sie Ihren Nachnamen ein: ");
        String nachname = scanner.nextLine();
        System.out.printf("Hallo %s %s", name, nachname );
        scanner.close();


    }
}