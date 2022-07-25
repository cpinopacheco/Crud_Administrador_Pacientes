import { formatearFecha } from "../helpers/formatearFecha";

const CardPaciente = ({ paciente, setDataEditar, eliminarPaciente }) => {
  const { id, email, fechaIngreso, fechaAlta, nombre, apellido, sintomas } =
    paciente;

  return (
    <div className="p-5 mb-3 md:m-6 bg-slate-100 rounded-xl shadow-lg animate__animated animate__fadeInLeft ">
      <div className="mb-5">
        <p>
          <span className="font-bold">Nombre: </span> {nombre}
        </p>
        <p>
          <span className="font-bold">Apellido: </span> {apellido}
        </p>
        <p>
          <span className="font-bold">Email: </span> {email}
        </p>
        <p>
          <span className="font-bold">Fecha Ingreso: </span>{" "}
          {formatearFecha(fechaIngreso).split("-").reverse().join("-")}
        </p>
        <p>
          <span className="font-bold">Fecha Alta: </span>
          {fechaAlta.split("-").reverse().join("-")}
        </p>
        <p>
          <span className="font-bold">Síntomas: </span> {sintomas}
        </p>
      </div>

      <hr />
      <div className="flex justify-between mt-5">
        <button
          className="bg-blue-500 text-white uppercase p-2 rounded-lg hover:hover:bg-indigo-600 cursor-pointer transition-all"
          onClick={() => setDataEditar(paciente)} //pasa los datos a la variable de estado dataEditar
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white uppercase p-2 rounded-lg hover:hover:bg-red-600 cursor-pointer transition-all"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardPaciente;
