import type { StateCreator } from "zustand";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export function createStore<T>(
  initializer: StateCreator<T>,
  persistOptions?: Parameters<typeof persist<T>>[1],
) {
  return create<T>()(
    devtools(
      persist(initializer, {
        name: "zustand-store",
        ...persistOptions,
      }),
    ),
  );
}
