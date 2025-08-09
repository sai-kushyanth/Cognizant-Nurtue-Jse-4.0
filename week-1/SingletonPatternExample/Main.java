public class Main {
    public static void main(String[] args) {
        // Get the singleton instance
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Use the logger
        logger1.log("First log message.");
        logger2.log("Second log message.");

        // Confirm both references point to the same instance
        if (logger1 == logger2) {
            System.out.println("Both are the same Logger instance.");
        } else {
            System.out.println("Different Logger instances.");
        }
    }
}