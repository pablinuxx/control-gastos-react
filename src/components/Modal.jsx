import { useState } from "react";
import Mensaje from "./Mensaje";
import IconoCerrarModal from "../img/cerrar.svg";
export const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const cerrarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los Campos son Obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);

      return;
    }
    guardarGasto({
      nombre,
      cantidad,
      categoria,
    });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={IconoCerrarModal}
          alt="Icono Cerrar Modal"
          onClick={cerrarModal}
        />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            name="cantidad"
            type="number"
            placeholder="Añade la Cantiadad del Gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};
