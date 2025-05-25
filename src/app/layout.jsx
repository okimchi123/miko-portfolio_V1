import "@/styles/globals.css";
import { rubik } from "@/styles/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        {children}
      </body>
    </html>
  );
}
