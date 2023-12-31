import * as React from "react";
import type { PageProps } from "gatsby";
import App from "./App";
import Layout from "../Components/Base/Layout";
import NavbarComponent from "../Components/Base/Navbar";
import { Box } from "@chakra-ui/react";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box style={{ height: '100vh' }}>
      <Layout>
        <App />
      </Layout>
    </Box>
  );
};

export default IndexPage;

