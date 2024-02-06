import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}


const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <div>
      <h1 className={"product-title"}>Products List</h1>
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

export default CategoryPage;