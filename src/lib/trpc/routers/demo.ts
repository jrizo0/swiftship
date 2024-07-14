import { publicProcedure, router } from "../router-builder";

export const demoRouter = router({
  greet: publicProcedure.query(async ({ ctx }) => {
    const user = ctx.session?.user.name;
    return `Hello ${user ?? "anonymous user"}`;
  }),
});
