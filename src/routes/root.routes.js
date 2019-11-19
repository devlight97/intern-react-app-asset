import Home from '../pages/Home';
import ResultRouter from '../routers/result.routers';

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/result/:type',
    component: ResultRouter,
  }
];