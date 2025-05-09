import type { ComponentProps, FC, HTMLAttributes } from "react";
import { Link } from "react-router";
import css from "./style.module.css";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Header: FC<Props> = () => {
  return (
    <header className={css.root}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
