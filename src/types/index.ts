// Tipos para productos
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

// Tipos para el carrito
export interface CartItem extends Product {
  quantity: number;
}

// Estado del carrito
export interface CartState {
  items: CartItem[];
  total: number;
}

// Estado de productos
export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}
