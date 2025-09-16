export default function pdfToPng(pdfUrl) {
    return pdfUrl.replace(
        "/upload/",
        "/upload/pg_1,f_png,q_auto:best/"
    );
}