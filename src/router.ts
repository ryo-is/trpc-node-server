import * as trpc from '@trpc/server';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getAuthorization = () => {
    return req.headers.authorization || '';
  };

  return {
    req,
    res,
    authorization: getAuthorization(),
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

const createRouter = () => {
  return trpc.router<Context>();
};

export const appRouter = createRouter().query('hello', {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `hello ${input?.text ?? 'world'}`,
    };
  },
});

export type AppRouter = typeof appRouter;
