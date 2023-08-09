const Search = () => {
  return (
    <section className="busqueda">
      <h2 className="busqueda__heading">Busca un grupo en tu ciudad</h2>
      <div className="contenedor">
        <form className="formulario">
          <select className="formulario__campo">
            <option>Programación</option>
            <option>Diseño</option>
            <option>Negocios</option>
            <option>Moda</option>
            <option>Ejercicio y Salud</option>
            <option>Fotografía</option>
            <option>Comida</option>
            <option>Diseño Interior</option>
            <option>Café</option>
            <option>Cine</option>
            <option>Libros</option>
            <option>Emprendimiento</option>
          </select>
          <input
            className="formulario__campo"
            type="text"
            placeholder="Nombre Evento"
          />
          <input
            className="formulario__campo"
            type="text"
            placeholder="Ciudad o País"
          />
          <input className="formulario__submit" type="submit" value="Buscar" />
        </form>
      </div>
    </section>
  );
};

export default Search;
