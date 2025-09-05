import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Importa las imágenes desde src/assets/enjoy
import img1 from "@/assets/newFood/1.png";
import img2 from "@/assets/newFood/2.png";
import img3 from "@/assets/newFood/3.png";
import img4 from "@/assets/newFood/4.png";

// Importa Bootstrap y tu CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/styles/promociones.css"

const HotelPromos = () => {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4];

  return (
    <div className="container">
      {/* Botón regresar */}
      <div className="button-container">
        <button onClick={() => navigate("/dashboard")} className="button">

          Regresar
        </button>
      </div>

      {/* Carrusel */}
      <div
        id="myCarousel"
        className="carousel carousel-fade slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={src} alt={`Promo ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default HotelPromos;
