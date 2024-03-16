import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThumbnailCard from './components/ThumbnailCard';
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true); 
  const location = useLocation();
  const currentUrl = location.pathname;

  const handleChildClick = (childData) => {
    if (childData === "Snack") {
      const SnackRecipes = recipes.filter(
        recipe => recipe.mealType.includes(childData) 
        || recipe.mealType.includes('Beverage') 
        || recipe.mealType.includes('Dessert')
      );
      setFilteredData(SnackRecipes);
    } else if (childData === "All") {
      setFilteredData(recipes);
    } else {
      const filteredRecipes = recipes.filter(
        recipe => recipe.mealType.includes(childData)
      );
      setFilteredData(filteredRecipes);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const results = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(results);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setFilteredData(data.recipes);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
      <Navbar />
      {loading ? ( // Check loading state
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        currentUrl === '/' ?
          <main className="d-flex flex-nowrap custom-main-background">
            <SideBar dataToSend={handleChildClick} filteredData={filteredData} />
            <div className='container my-5'>
              <input
                type="text"
                placeholder="Search recipes by name or ingredients"
                value={searchQuery}
                onChange={handleSearch}
                className="form-control mb-3"
              />
              <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 '>
                {(searchQuery ? searchResults : filteredData).map((recipe, index) => (
                  <ThumbnailCard key={index} recipe={recipe} recipes={recipes} />
                ))}
              </div>
            </div>
          </main>
          : <Outlet />
      )}
      <Footer/>
    </>
  );
};

export default App;
