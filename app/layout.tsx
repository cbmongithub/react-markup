import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "React Markup",
	description:
		"A collection of unstyled components for the purpose of starting a design system, create and testing new styles, or just to have fun learning! Bring your own CSS. Powered by playroom and NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en">
				<body>{children}</body>
			</html>
		);
}
