import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";
import { LayoutProps } from "../types/types";

const Layout = styled.div`
  display: flex;
  gap: 38px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const MainLayout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      {children}
    </Layout>
  );
};
export default MainLayout;
