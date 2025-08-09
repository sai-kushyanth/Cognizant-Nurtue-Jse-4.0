import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static Product search(Product[] products, int targetId) {
        // Ensure products are sorted by ID
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
