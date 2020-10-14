import React from "react";
import { Suspense, lazy } from "react";
import "./App.css";
import Article from "./Article";
import ErrorBoundary from "./ErrorBoundary";
const Comments = lazy(() => import("./Comments"));

const Loading = () => <div style={{ color: "white" }}>Loading . . . </div>;

function App() {
    return (
        <>
            <h1 className="webName">BiLA BLOG</h1>
            <div className="container">
                <div className="page">
                    <Article />
                </div>
                <Suspense fallback={<Loading />}>
                    <ErrorBoundary>
                        <Comments />
                    </ErrorBoundary>
                </Suspense>
            </div>
        </>
    );
}

export default App;
