import ResultRouter from '../routers/result.routers';
import HomeRouters from '../routers/home.routers';

export const routes = [
  {
    exact: true,
    path: '/',
    component: HomeRouters,
  },
  {
    exact: true,
    path: '/result/:type',
    component: ResultRouter,
  }
];