import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    private handleResetButtonClick = () =>
        this.setState((prevState) => ({
            hasError: !prevState.hasError,
        }));

    public render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <div className="absolute top-1/4 left-0 right-0 bottom-0 text-center">
                    <div className="mb-8 space-y-6">
                        <h1 className=" relative text-8xl font-bold">Ooops!!</h1>
                        <h4 className="text-basic font-bold">Something went wrong.</h4>
                    </div>
                    <Link
                        to="/"
                        onClick={this.handleResetButtonClick}
                        className="mt-6 py-4 px-16 font-semibold bg-black hover:bg-gray-700 text-white"
                    >
                        Go to Home
                    </Link>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
