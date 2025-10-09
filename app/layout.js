import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Admin Panel",
  description: "AI-Powered Leadership Development Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
