import type { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const HomePage: FC<Props> = () => {
  return <main className={css.root}>Home Page</main>;
};

export default HomePage;
