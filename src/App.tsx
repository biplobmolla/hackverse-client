import ErrorBoundary from "components/ErrorBoundary";
import Layout from "components/Layout";
import Prompts from "components/Prompts";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch } from "react-redux";
import { Breakpoint } from "react-socks";
import { loadUser } from "store/auth";

const queryClient = new QueryClient();

type AppProps = {
	children: JSX.Element;
};

function App({ children }: AppProps) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary>
				<Breakpoint large up>
					{children}
				</Breakpoint>
				<Breakpoint medium down>
					<Layout.Mobile>{children}</Layout.Mobile>
				</Breakpoint>
				<Prompts />
			</ErrorBoundary>
		</QueryClientProvider>
	);
}

export default App;
