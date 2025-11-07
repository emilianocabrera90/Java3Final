import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('products.product');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener carritos', error });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('products.product');
    if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito', error });
  }
};

export const createCart = async (req, res) => {
  try {
    const newCart = new Cart({ products: [] });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el carrito', error });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await Cart.findById(cid);
    const product = await Product.findById(pid);
    if (!cart || !product) return res.status(404).json({ message: 'Carrito o producto no encontrado' });

    const existing = cart.products.find(p => p.product.toString() === pid);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar producto al carrito', error });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const deleted = await Cart.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Carrito no encontrado' });
    res.json({ message: 'Carrito eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el carrito', error });
  }
};

