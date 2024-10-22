import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Container maxW="158ch">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
