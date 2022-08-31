import { Router } from 'express';
interface RouterInjectors {
  userRouter: Router;
}

export const createRoute = (routerInjectors: RouterInjectors) => {
  const router = Router();

  router.get('/api/vi', (_, response) => {
    
  })
};
