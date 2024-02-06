import React from 'react';
import './style/App.css';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductLinks from "./components/ProductLinks";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className={"container"}>
            <Router>
                <ProductLinks/>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;