import React, { useState, useEffect } from "react";
import { Button, ListGroup, Pagination } from "react-bootstrap";
import { Product } from "../types";
import { getProducts } from "../service/product";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data: any = await getProducts(currentPage);
      setProducts(data.list);
      // Assuming backend returns total pages
      setTotalPages(Math.ceil(data.total / 10));
    };
    fetchProducts();
  }, [currentPage]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <Button className="justify-end" onClick={() => handleLogout()}>
        Logout
      </Button>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Pagination className="mt-3">
        <Pagination.Prev
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        />
        <Pagination.Next
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Products;
