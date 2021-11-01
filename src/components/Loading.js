import React from 'react'

const Loading = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="spinner-border text-primary me-2" role="status">
          <span className="visually-hidden">Cargado...</span>
        </div>
        <div><strong>Cargando pokemons...</strong></div>
      </div>
    </div>
  )
}

export default Loading