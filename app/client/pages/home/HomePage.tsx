import client from "@/client/infra/honoClient";
import { useQuery } from "@tanstack/react-query";
import { type ComponentProps, type FC, type HTMLAttributes } from "react";
import css from "./style.module.css";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const HomePage: FC<Props> = () => {
  const { data, status } = useQuery({
    queryKey: ["message"],
    queryFn: () => client.api.hello.$get().then((r) => r.json()),
  });

  return (
    <main className={css.root}>
      <h1>Home Page</h1>
      {status !== "success" ? <p>Loading...</p> : <p>{data.message}</p>}
    </main>
  );
};

export default HomePage;
