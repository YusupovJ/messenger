import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeProviderProps } from "@chakra-ui/react";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const colorModeManager: ColorModeProviderProps["colorModeManager"] = {
	set() {
		localStorage.setItem("chakra-ui-color-mode", "dark");
		return "dark";
	},
	get() {
		return "dark";
	},
	type: "localStorage",
};

root.render(
	<BrowserRouter>
		<ChakraProvider resetCSS={true} colorModeManager={colorModeManager}>
			<App />
		</ChakraProvider>
	</BrowserRouter>
);
