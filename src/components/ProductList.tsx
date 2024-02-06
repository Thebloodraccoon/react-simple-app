import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
}


const ProductList: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>();
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h2 className={"product-title"}>Product List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {products?.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.thumbnail} alt={product.title} className="product-image" />
                            <Link to={`/product/${product.id}`}>
                                <h3 className={"link"}>{product.title}</h3>
                            </Link>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;