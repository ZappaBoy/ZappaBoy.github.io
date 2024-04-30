import React, { Suspense } from "react";
import Loading from "./loading";
import "../styles/globals.css";
import { AppFooter, AppHeader, AppMetadata } from "../components";
import { ThemeContext } from "../context";

export const metadata = { ...AppMetadata };

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang='en'>
		<body>
		<ThemeContext>
			<AppHeader />
			<Suspense fallback={<Loading />}>{props.children}</Suspense>
			<AppFooter />
		</ThemeContext>
		</body>
		</html>
	);
}
