import React from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css'

const MultiCollapseExample = ({ dataToSend, filteredData }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 animated-element"
      style={{ width: "24%"}}
    >
      <p className="fw-bold text-center fs-1" id="#TopSideBar">Meal Type</p>
      <div id="accordion">
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn w-100"
              data-bs-toggle="collapse"
              href="#collapse1"
              onClick={() => dataToSend("All")}
            >
              All
            </a>
          </div>
          <div id="collapse1" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
              <ul className="list-group">
                  {filteredData.map((recipe, index) => (
                    <li className="list-group-item" key={index}>
                      {recipe.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn w-100"
              data-bs-toggle="collapse"
              href="#collapseTwo"
              onClick={() => dataToSend("Dinner")}
            >
              Dinner
            </a>
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
              <ul className="list-group">
                {filteredData.map((recipe, index) => (
                  <li className="list-group-item" key={index}>
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header">
            <a
              className="collapsed btn w-100"
              data-bs-toggle="collapse"
              href="#collapseThree"
              onClick={() => dataToSend("Lunch")}
            >
              Lunch
            </a>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              <ul className="list-group">
                {filteredData.map((recipe, index) => (
                  <li className="list-group-item" key={index}>
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn w-100"
              data-bs-toggle="collapse"
              href="#collapse4"
              onClick={() => dataToSend("Breakfast")}
            >
              Breakfast
            </a>
          </div>
          <div
            id="collapse4"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              <ul className="list-group">
                {filteredData.map((recipe, index) => (
                  <li className="list-group-item" key={index}>
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn w-100"
              data-bs-toggle="collapse"
              href="#collapse5"
              onClick={() => dataToSend('Snack', 'Dessert')}
            >
              Snack
            </a>
          </div>
          <div
            id="collapse5"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              <ul className="list-group">
                {filteredData.map((recipe, index) => (
                  <li className="list-group-item" key={index}>
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MultiCollapseExample;

// Breakfast
// Lunch
// Beverage
// Snack
//

const temp = ({ dataToSend, filteredData }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "30%" }}
    >
      <div className="container mt-4">
        <p className="fw-bold text-center fs-1">Meal Type</p>
        <>
          <p className="d-inline-flex gap-1 w-100">
            <Button
              variant="primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
              className="w-100"
              onClick={() => dataToSend("Breakfast")}
            >
              Breakfast
            </Button>
          </p>
          <Collapse in={false}>
            <div id="collapseExample3">
              <div className="card card-body text-bg-light">
                <ul className="list-group">
                  {filteredData.map((recipe, index) => (
                    <li className="list-group-item" key={index}>
                      {recipe.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </>
        <>
          <p className="d-inline-flex gap-1 w-100">
            <Button
              variant="primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample4"
              className="w-100"
              onClick={() => dataToSend("Snack")}
            >
              Snack
            </Button>
          </p>
          <Collapse in={false}>
            <div id="collapseExample4">
              <div className="card card-body text-bg-light">
                <ul className="list-group">
                  {filteredData.map((recipe, index) => (
                    <li className="list-group-item" key={index}>
                      {recipe.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </>
      </div>
    </div>
  );
};
