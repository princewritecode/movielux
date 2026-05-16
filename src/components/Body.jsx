import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";

const Body = () =>
{


    const appRouter = createBrowserRouter([
        { path: '/', element: <Login></Login> },
        { path: '/browse', element: <Browse></Browse> }
    ]);



    return (
        <>
            <RouterProvider router={appRouter}> </RouterProvider>
        </>
    );
};

export default Body;