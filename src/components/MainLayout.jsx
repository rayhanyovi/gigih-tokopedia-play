import React from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Home from "../pages/Home.jsx";
import { Link } from "react-router-dom";
import VideoDetails from "../pages/VideoDetails.jsx";

const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const location = useLocation();
  return (
    <Layout>
      <Link to={"/home"}>
        <Header
          className="box-shadow-navbar"
          style={{
            backgroundColor: "white",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tokopedia.svg/400px-Tokopedia.svg.png?20210525134051"
            style={{ height: "28px" }}
          />

          <h2
            style={{
              marginLeft: "5px",
            }}>
            PLAY
          </h2>
        </Header>
      </Link>
      <Content
        className="site-layout"
        style={{
          minHeight: "100vh",
          padding: "10px 50px",
        }}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/video/:id" component={VideoDetails} />{" "}
          <Redirect to="/home" />
        </Switch>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}>
        Muhammad Rayhan Yovi, 14 Agustus 2023
      </Footer>
    </Layout>
  );
};
export default MainLayout;
