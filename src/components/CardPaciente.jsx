import { formatearFecha } from "../helpers/formatearFecha";

const CardPaciente = ({ paciente, setDataEditar, eliminarPaciente }) => {
  const { id, email, fechaIngreso, fechaAlta, nombre, apellido, sintomas } =
    paciente;

  return (
    <div className="p-5 mb-3 md:m-3 bg-slate-100 rounded-xl">
      <p>
        <span className="font-medium">Nombre: </span> {nombre}
      </p>
      <p>
        <span className="font-medium">Apellido: </span> {apellido}
      </p>
      <p>
        <span className="font-medium">Email: </span> {email}
      </p>
      <p>
        <span className="font-medium">Fecha Ingreso: </span>{" "}
        {formatearFecha(fechaIngreso).split("-").reverse().join("-")}
      </p>
      <p>
        <span className="font-medium">Fecha Alta: </span>
        {fechaAlta.split("-").reverse().join("-")}
      </p>
      <p>
        <span className="font-medium">Síntomas: </span> {sintomas}
      </p>

      <div className="flex justify-between mt-5">
        <button
          className="bg-blue-600 text-white font-medium p-2 rounded-lg hover:hover:bg-indigo-700 cursor-pointer transition-all"
          onClick={() => setDataEditar(paciente)} //pasa los datos a la variable de estado dataEditar
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white font-medium p-2 rounded-lg hover:hover:bg-red-600 cursor-pointer transition-all"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardPaciente;
