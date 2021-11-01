import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <div className="color-white">
          <strong>@ 2021 Pokemon Inc</strong>
        </div>
        <div className="fs-2">
          <i className="bi bi-instagram me-2"></i>
          <i className="bi bi-facebook"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer