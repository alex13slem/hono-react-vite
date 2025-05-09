import type { ComponentProps, FC, HTMLAttributes } from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const BaseLayout: FC<Props> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BaseLayout;
