export const ROUTER_PATH = {
  DASHBOARD: 'dashboard',
  PRODUCT: 'product',
  LOGIN: 'login'
}

export const ROUTES = [
  {
    link: `/${ROUTER_PATH.DASHBOARD}`,
    name: 'Dashboard'
  },
  {
    link: `/${ROUTER_PATH.PRODUCT}`,
    name: 'Product'
  }
]

export interface Products {
  id: number;
  name: string;
  cost: number;
}
