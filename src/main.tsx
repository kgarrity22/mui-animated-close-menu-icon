import * as ReactDOM from "react-dom/client";
// import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <></>,
    children: [{ path: "/", element: <></> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <ThemeProvider theme={basicTheme}>
  <RouterProvider router={router} />
  // </ThemeProvider>
);
