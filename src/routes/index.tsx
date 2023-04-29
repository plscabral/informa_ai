import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthGuard } from "./guards/AuthGuard";
import { GuestGuard } from "./guards/GuestGuard";

// pages
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Landing } from "../pages/Landing";

export function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GuestGuard />}>
					<Route element={<SignIn />} path="/" />
					<Route element={<SignUp />} path="/criar-conta" />
					{/* <Route element={<ForgotPassword />} path="/esqueceu-sua-senha" /> */}
				</Route>

				<Route element={<AuthGuard />}>
					<Route element={<Landing />} path="/landing" />
					{/* <Route element={<CreateNewTicket />} path="/criar-ticket" />
          <Route element={<DetailTicket />} path="/detalhe-ticket/:ticketId" /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
