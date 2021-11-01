import React from 'react';

const Pagination = (props) => {
  const { page, total, onClickPrevious, onClickNext } = props
  return (
    <div>
      <button onClick={onClickPrevious} className="btn p-0 me-2 text-primary fs-2" disabled={page===1? true:false}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>
      <span>Página {page} de {total}</span>
      <button onClick={onClickNext} className="btn p-0 ms-2 text-primary fs-2" disabled={page===total? true:false}>
        <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
    </div>
  )
}

export default Pagination