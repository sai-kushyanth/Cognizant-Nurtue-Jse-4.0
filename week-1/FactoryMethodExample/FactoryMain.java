public class FactoryMain {
    public static void main(String[] args) {
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        Document pdf = pdfFactory.createDocument();
        Document word = wordFactory.createDocument();
        Document excel = excelFactory.createDocument();

        pdf.open();
        word.open();
        excel.open();
    }
}
