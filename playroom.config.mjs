module.exports = {
	components: "./components",
	outputPath: "./playroom",

	// Optional:
	title: "My Awesome Library",
	themes: "./themes",
	snippets: "./playroom/snippets.ts",
	frameComponent: "./playroom/FrameComponent.js",
	scope: "./playroom/useScope.js",
	widths: [320, 768, 1024],
	port: 9000,
	openBrowser: true,
	paramType: "search", // default is 'hash'
	exampleCode: `
      <Button>
        Hello World!
      </Button>
    `,
	baseUrl: "/playroom/",
	webpackConfig: () => ({
		// Custom webpack config goes here...
	}),
	iframeSandbox: "allow-scripts",
	defaultVisibleWidths: [
		// subset of widths to display on first load
	],
	defaultVisibleThemes: [
		// subset of themes to display on first load
	],
};