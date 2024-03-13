import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import mockProducts from '../mockData/products';
import './Products.css';

function Products() {
    const [products, setProducts] = useState(mockProducts);

    // Function to add a new product
    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    // Function to edit a product
    const editProduct = (productId, updatedProduct) => {
        const updatedProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product, ...updatedProduct };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    // Function to delete a product
    const deleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div className="products-container">
            <h1 className="products-heading">Products Management</h1>
            <ProductForm addProduct={addProduct} />
            <div className="product-tiles">
                {products.map(product => (
                    <div key={product.id} className="product-tile">
                        <ProductItem
                            product={product}
                            editProduct={editProduct}
                            deleteProduct={deleteProduct}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
