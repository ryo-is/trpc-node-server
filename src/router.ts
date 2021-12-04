import { Router } from 'express';

export const createRouter = () => {
  const router = Router();

  router.get('/healthchack', (req, res) => {
    res.status(200).send({ message: 'Alive' });
  });

  return router;
};
