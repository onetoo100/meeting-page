import ImageComponent from "./ui/image";
import categoria_1 from "../assets/categoria_1.jpg";
import categoria_2 from "../assets/categoria_2.jpg";
import categoria_3 from "../assets/categoria_3.jpg";
import categoria_4 from "../assets/categoria_4.jpg";
import categoria_5 from "../assets/categoria_5.jpg";
import categoria_6 from "../assets/categoria_6.jpg";
import categoria_7 from "../assets/categoria_7.jpg";
import categoria_8 from "../assets/categoria_8.jpg";
import categoria_9 from "../assets/categoria_9.jpg";
import categoria_10 from "../assets/categoria_10.jpg";
import categoria_11 from "../assets/categoria_1.jpg";
import categoria_12 from "../assets/categoria_12.jpg";
import { categoriesData } from "./data/data";

const Categories = () => {
  return (
    <section className="categorias">
      <h2 className="categorias__heading">Categorías</h2>

      <ul className="categorias__grid contenedor">
        {categoriesData.map((category, index) => (
          <li key={index} className="categoria">
            <ImageComponent
              className="categoria__imagen"
              imageUrl={`${
                index === 0
                  ? categoria_1
                  : index === 1
                  ? categoria_2
                  : index === 2
                  ? categoria_3
                  : index === 3
                  ? categoria_4
                  : index === 4
                  ? categoria_5
                  : index === 5
                  ? categoria_6
                  : index === 6
                  ? categoria_7
                  : index === 7
                  ? categoria_8
                  : index === 8
                  ? categoria_9
                  : index === 9
                  ? categoria_10
                  : index === 10
                  ? categoria_11
                  : categoria_12
              }`}
            />
            <p className="categoria__nombre">{category.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
