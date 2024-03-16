import React from 'react';
import { Link } from 'react-router-dom';

const ThumbnailCard = ({ recipe }) => {
  const toPath = {
    pathname: "/RecipeCard",
    search: `?rc=${recipe.id}`,
  };

  return (
    <div className="col">
    <div className="card shadow-sm">
      <Link to={toPath} target="_blank" className="nav-link">
        <img
          src={recipe.image}
          className="bd-placeholder-img card-img-top"
          alt={`Thumbnail of ${recipe.name}`}
          width="100%"
          height="225"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-text">{recipe.name}</h5>
        <div className="d-flex justify-content-between align-items-center">
         
            <samp>
              {recipe.tags.map((singleTag, index) => (
                <samp className="badge bg-secondary m-1 " key={index}>
                  {singleTag}
                </samp>
              ))}
            </samp>
          
          <small className="text-body-secondary">Rating {recipe.rating}</small>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ThumbnailCard;



