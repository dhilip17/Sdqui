import "./App.css";
import RHeader from "./layout/Header";
import { Footer } from "antd/es/layout/layout";
import { RouterProvider } from "react-router-dom";
import { Layout } from "antd";
import { router, unprotectedRoutes } from "./router";
const layoutStyle = {
  borderRadius: 8,
  width: "calc(100%)",
  height: "100vh",
  maxWidth: "calc(100%)",
  maxHeight: "100vh",
};
const footerStyle = {
  textAlign: "center",
  color: "black",
  backgroundColor: "white",
  position: "fixed",
  bottom: 0,
  width: "100%",
};
function App() {
  return (
    <div className="App">
      {console.log("IsAuth Value:", window.localStorage.getItem("isAuth"))}
      {!window.localStorage.getItem("isAuth") ? (
        <RouterProvider router={unprotectedRoutes} />
      ) : (
        <Layout style={layoutStyle}>
          <RHeader />
          <RouterProvider router={router} />
          <Footer style={footerStyle}>
            Copyright &copy; 2024 Saama Technologies.
          </Footer>
        </Layout>
      )}
    </div>
  );
}

export default App;
