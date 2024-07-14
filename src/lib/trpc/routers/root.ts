import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { router } from "../router-builder";
import { demoRouter } from "./demo";

export const appRouter = router({
  demo: demoRouter,
});

export type AppRouter = typeof appRouter;

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
