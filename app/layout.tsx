import "../styles/globals.css";
import { Html, Body, Main } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "React Markup",
	description:
		"A collection of unstyled, jsx markup for the sole purpose of tinkering. Building with Playroom and Nextjs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	  <Html lang="en">
		  <Body>
			  <Main>
				  {children}
			  </Main>
		  </Body>
	  </Html>
		);
}
