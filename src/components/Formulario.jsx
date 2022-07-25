import { useState, useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import Alerta from "./Alerta";

const initialState = {
  id: null,
  nombre: "",
  apellido: "",
  email: "",
  fechaIngreso: new Date(),
  fechaAlta: "",
  sintomas: "",
};

const Formulario = ({
  crearPaciente,
  editarPaciente,
  dataEditar,
  setDataEditar,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [estadoAlerta, setEstadoAlerta] = useState(false);

  const { id, nombre, apellido, email, fechaIngreso, fechaAlta, sintomas } =
    formData;

  /*   const dia = fechaIngreso.getDate();
  const mes = fechaIngreso.getMonth() + 1;
  const anio = fechaIngreso.getFullYear();

  */

  useEffect(() => {
    if (dataEditar) {
      setFormData(dataEditar); //pasamos los datos al formulario
    } else {
      setFormData(initialState);
    }
  }, [dataEditar]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación campos obligatorios
    if ([nombre, apellido, email, fechaAlta, sintomas].includes("")) {
      setEstadoAlerta(true);
      setTimeout(() => {
        setEstadoAlerta(false);
      }, 3000);
      return;
    }

    if (id === null) {
      crearPaciente(formData);
    } else {
      editarPaciente(formData);
    }

    handleReset();
    setEstadoAlerta(false);
  };

  const handleReset = () => {
    setFormData(initialState);
    setDataEditar(null);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        {dataEditar ? "Editar Paciente" : "Ingresar Paciente"}
      </h2>

      <form
        className="p-5 my-7 bg-slate-100 rounded-xl"
        onSubmit={handleSubmit}
      >
        {estadoAlerta && <Alerta mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label htmlFor="nombre" className="block uppercase font-medium">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="w-full p-1 border-2"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="apellido" className="block uppercase font-medium">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            className="w-full p-1 border-2"
            value={apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block uppercase font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-1 border-2"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha-alta" className="block uppercase font-medium">
            Alta
          </label>
          <input
            type="date"
            name="fechaAlta"
            id="fechaAlta"
            min={formatearFecha(fechaIngreso)}
            className="w-full p-1 border-2"
            value={fechaAlta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block uppercase font-medium">
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="w-full p-1 border-2"
            value={sintomas}
            onChange={handleChange}
          ></textarea>
        </div>
        <input
          type="submit"
          value={dataEditar ? "Guardar Cambios" : "Agregar Paciente"}
          className="w-full bg-blue-600 text-white uppercase font-medium p-3 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
