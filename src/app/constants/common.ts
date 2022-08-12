export const ROUTER_PATH = {
  DASHBOARD: 'dashboard',
  PRODUCT: 'product'
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
