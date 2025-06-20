public class Forecast {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double initial, double rate, int years) {
        if (years == 0) {
            return initial;
        }
        return futureValueRecursive(initial, rate, years - 1) * (1 + rate);
    }

    // Optimized version using memoization (optional)
    public static double futureValueMemo(double initial, double rate, int years, double[] memo) {
        if (years == 0) return initial;
        if (memo[years] != 0) return memo[years];
        memo[years] = futureValueMemo(initial, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }

    public static void main(String[] args) {
        double initial = 10000;
        double rate = 0.10;
        int years = 5;

        System.out.println("🔁 Recursive Forecast:");
        double result = futureValueRecursive(initial, rate, years);
        System.out.printf("Future value after %d years: ₹%.2f\n", years, result);

        System.out.println("\n⚡ Optimized Forecast (Memoization):");
        double[] memo = new double[years + 1];
        double optimizedResult = futureValueMemo(initial, rate, years, memo);
        System.out.printf("Future value after %d years: ₹%.2f\n", years, optimizedResult);
    }
}
