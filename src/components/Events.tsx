import ImageComponent from "./ui/image";
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import { eventsData } from "./data/data";

const Events = () => {
  return (
    <main className="eventos contenedor">
      <h2 className="eventos__heading">Próximos eventos</h2>

      <div className="eventos__grid">
        {eventsData.map((event, index) => (
          <div key={index} className="evento">
            <a href="#">
              <ImageComponent
                className="evento__imagen"
                imageUrl={`${
                  index === 0 ? imagen1 : index === 1 ? imagen2 : imagen3
                }`}
              />
              <div className="evento__contenido">
                <p className="evento__fecha">{event.date}</p>
                <h3 className="evento__nombre">{event.title}</h3>

                <div className="evento__autor">
                  <div className="evento__autor-imagen">
                    <ImageComponent
                      imageUrl={`${
                        index === 0
                          ? "https://image.lexica.art/full_jpg/5b80976e-a3d1-4add-accf-d661290ae389"
                          : index === 1
                          ? "https://image.lexica.art/full_jpg/c0ff7380-2cd1-4348-8301-693cd6a033b8"
                          : "https://image.lexica.art/full_jpg/af7eff58-7cdc-4984-b93e-b955bad1b4c7"
                      }`}
                      alt="imagen perfil"
                    />
                  </div>
                  <div className="evento__autor-informacion">
                    <p className="evento__organizado-texto">Organizado por:</p>
                    <p className="evento__organizado-nombre">{event.author}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Events;
