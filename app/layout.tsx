import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "React Markup",
	description:
		"A collection of all React elements. Start a design system, create and test styles, or just have fun learning! Bring your own CSS. Powered by playroom and NextJS.",
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
