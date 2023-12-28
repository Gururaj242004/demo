import React, { useState } from "react";
import Categories from "./Categories";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cart.css';

function Cart() {
  const [data, setData] = useState(Categories);

  const filterCategories = (filteritem) => {
    const result = Categories.filter((e) => {
      return e.title === filteritem;
    });
    setData(result);
  };

  return (
    <div>
      <h1 className="header">BCC Institutions & Co</h1>
      <div className="top-buttons">
        <Button variant="success" onClick={() => { filterCategories("Coimbatore") }}>CBE</Button>
        <Button variant="success" onClick={() => { filterCategories("Chennai") }}>CHN</Button>
        <Button variant="success" onClick={() => { filterCategories("Bangalore") }}>BLR</Button>
        <Button variant="success" onClick={() => { setData(Categories) }}>All</Button>
      </div>
      <div className="cart">
        {data.map((e) => {
          const { id, title, fees, image } = e;
          return (
            <div className="card" key={id}>
              <Card>
                <Card.Img className="img" variant="top" src={image} />
                <Card.Body>
                  <Card.Title className="head"><h1>{title}</h1></Card.Title>
                  <Card.Text className="font">
                    College is the bridge that connects the past to the future, where the present becomes the foundation of tomorrow's achievements
                  </Card.Text>
                  <Button variant="primary">Rs.{fees}</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
