import Alerta from "./Alerta";
import CardPaciente from "./CardPaciente";

const ListaPacientes = ({ pacientes, setDataEditar, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

      <div className="my-7">
        {pacientes.length > 0 ? (
          pacientes.map((paciente) => (
            <CardPaciente
              key={paciente.id}
              paciente={paciente}
              setDataEditar={setDataEditar}
              eliminarPaciente={eliminarPaciente}
            />
          ))
        ) : (
          <Alerta mensaje="No hay pacientes registrados" />
        )}
      </div>
    </div>
  );
};

export default ListaPacientes;
