import { Suspense } from "react";
import Loading from "./loading";
import "../styles/globals.css";
import { AppFooter, AppHeader, AppMetadata } from "../components";
import { ThemeContext } from "../context";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
		<body>
		<ThemeContext>
			<AppHeader />
			<Suspense fallback={<Loading />}>{children}</Suspense>
			<AppFooter />
		</ThemeContext>
		</body>
		</html>
	);
}
