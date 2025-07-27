public class Logger {
    // Step 1: Create a private static instance of Logger
    private static Logger instance;

    // Step 2: Make the constructor private so it can't be instantiated from outside
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Step 3: Provide a public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // Lazy initialization
        }
        return instance;
    }

    // Method to log messages
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
