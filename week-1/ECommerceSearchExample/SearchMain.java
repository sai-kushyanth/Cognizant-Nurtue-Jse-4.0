public class SearchMain {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shirt", "Clothing"),
            new Product(150, "Smartphone", "Electronics"),
            new Product(310, "Book", "Stationery"),
            new Product(90, "Shoes", "Footwear")
        };

        int searchId = 150;

        // Linear Search
        System.out.println("🔍 Linear Search:");
        Product linearResult = LinearSearch.search(products, searchId);
        System.out.println(linearResult != null ? linearResult : "Product not found");

        // Binary Search
        System.out.println("\n🔍 Binary Search:");
        Product binaryResult = BinarySearch.search(products, searchId);
        System.out.println(binaryResult != null ? binaryResult : "Product not found");
    }
}
