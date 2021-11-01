import React from 'react';

const Pokemon = (props) => {
  const {pokemon} = props;
  return (
    <div className="col-md-3 col-sm-6 col-12 mb-2">
      <div className="card">
        <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title text-capitalize">{pokemon.name}</h5>
            <p className="card-title">#{pokemon.id}</p>
          </div>
          <h6 className="card-subtitle text-muted text-capitalize d-flex">
            {pokemon.types.map((type, index) => {
              return (
                <div className="me-2" key={index}>{type.type.name}</div>
              );
            })}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;