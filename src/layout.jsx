import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "PeerConnectHub",
  description: "Connect with peers for study groups and sports activities",
}

export default function RootLayout({ children }) {
  const isAuthPage =
    children?.props?.childPropsList?.segment === "login" || children?.props?.childPropsList?.segment === "signup"

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex">
            {!isAuthPage && <Sidebar />}
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

