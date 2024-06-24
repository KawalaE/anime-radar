import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding="20px">
        <Heading>Oops...</Heading>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpecred error occured."}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
