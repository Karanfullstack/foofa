import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./layout/Layout";
import PrivacyPolicy from "./components/Privacy";
import Regulamin from "./components/Regulations";
import DeleteAccountPolicy from "./components/DeleteAccountPolicy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "polityka-prytwatności",
				element: <PrivacyPolicy />,
			},
			{
				path: "regulamin",
				element: <Regulamin />,
			},
			// Informacje o Usunięciu konta
			{
				path: "informacje-Usunięciu-konta",
				element: <DeleteAccountPolicy />,
			},
		],
	},
]);

export default router;
