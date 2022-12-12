import "antd/dist/antd.css";
import App from "App";
import "assets/css/index.scss";
import Layout from "components/Layout";
import RouteAnonymous from "components/RouteAnonymous";
import RoutePrivate from "components/RoutePrivate";
import Dashboard from "pages/dashboard";
import Feedback from "pages/feedback";
import ForEmployers from "pages/for-employeers";
import ForTalents from "pages/for-tallents";
import Home from "pages/home";
import Jobs from "pages/jobs";
import JobsView from "pages/jobs-manage/views/view";
import JobsNew from "pages/jobs-new";
import NotFound from "pages/not-found";
import Profile from "pages/profile";
import Settings from "pages/settings";
import SignIn from "pages/signin";
import SignUp from "pages/signup";
import Success from "pages/success";
import Verification from "pages/verification";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import reportWebVitals from "reportWebVitals";
import * as serviceWorkerRegistration from "serviceWorkerRegistration";
import store from "store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<BreakpointProvider>
			<Router>
				<App>
					<Routes>
						<Route element={<RoutePrivate />}>
							<Route element={<Layout.Dashboard />}>
								<Route path="dashboard" element={<Dashboard />} />
								<Route path="jobs">
									<Route index element={<Jobs />} />
									<Route path="view/:id" element={<JobsView />} />
								</Route>
								<Route path="profile" element={<Profile />} />
								<Route path="settings/*" element={<Settings />} />
								<Route path="feedback" element={<Feedback />} />
								<Route path="post-job" element={<JobsNew />} />
							</Route>
						</Route>
						<Route element={<RouteAnonymous />}>
							<Route element={<Layout.Site />}>
								<Route path="/" element={<Home />} />
								<Route path="for-talents" element={<ForTalents />} />
								<Route path="for-employers" element={<ForEmployers />} />
								<Route path="jobs" element={<Jobs />} />
								<Route path="login" element={<SignIn />} />
								<Route path="join" element={<SignUp />} />
								<Route path="verify" element={<Verification />} />
								<Route path="success" element={<Success />} />
								<Route path="*" element={<NotFound />} />
							</Route>
						</Route>
					</Routes>
				</App>
			</Router>
		</BreakpointProvider>
	</Provider>
);

serviceWorkerRegistration.register();

reportWebVitals();

if (!process.env.REACT_APP_DEBUG) {
	console.log = () => {};
}
