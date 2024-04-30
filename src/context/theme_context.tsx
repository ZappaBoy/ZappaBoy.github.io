"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

interface ThemeContextProps {
	children: React.ReactNode;
}

export function ThemeContext(props: ThemeContextProps) {
	return <ThemeProvider attribute='class'>{props.children}</ThemeProvider>;
}
