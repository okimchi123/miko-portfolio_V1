import "@/styles/globals.css";
import { rubik } from "@/styles/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.className}`}>
        {children}
      </body>
    </html>
  );
}
