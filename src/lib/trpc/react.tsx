import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "./routers/root";

export const trpc = createTRPCReact<AppRouter>({});
