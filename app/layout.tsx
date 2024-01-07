import Header from "@/components/main/Header";
import "./globals.css";
import Container from "@/components/ui/Container";

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
        </Container>
      </body>
    </html>
  );
}
