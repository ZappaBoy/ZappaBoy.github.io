import React, { Suspense } from "react";
import Loading from "./loading";
import "../styles/globals.css";
import { AppFooter, AppHeader, AppMetadata } from "../components";
import { ThemeContext } from "../context";
import { Viewport } from "next";

export const metadata = { ...AppMetadata };

export const viewport: Viewport = {
	themeColor: "dark"
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {

	return (
		// TODO: remove suppressHydrationWarning whe next-themes is fixed
		<html lang='en' suppressHydrationWarning>
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
