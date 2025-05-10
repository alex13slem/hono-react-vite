import type { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const AboutPage: FC<Props> = () => {
  return <main className={css.root}>About Page</main>;
};

export default AboutPage;
