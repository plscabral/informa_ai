import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: {
			WebkitFontSmoothing: "antialiased",
			body: {
				bg: "blackAlpha.900",
				color: "white",
			}
		}
	},
	fonts: {
		heading: "Barlow",
		body: "Barlow"
	},
});
