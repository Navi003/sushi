import Header from "@/components/main/Header";
import "./globals.css";
import Container from "@/components/ui/Container";
import Footer from "@/components/main/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
