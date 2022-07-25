import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [dataEditar, setDataEditar] = useState(null); //cuando trae datos haremos un update, cuando no tenga datos haremos un create. Trae datos cuando se pulsa el botón de editar

  //Almacenar y obtener pacientes en el localStorage
  useEffect(() => {
    const pacientesLocalStorage =
      JSON.parse(localStorage.getItem("pacientes")) ?? [];
    setPacientes(pacientesLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  //---------------------------------------------------

  //**** CRUD ****
  //create
  const crearPaciente = (data) => {
    data.id = Date.now();
    setPacientes([...pacientes, data]);
  };

  //update
  const editarPaciente = (data) => {
    const nuevosDatosPaciente = pacientes.map((paciente) =>
      paciente.id === data.id ? data : paciente
    );
    setPacientes(nuevosDatosPaciente);
  };

  //delete
  const eliminarPaciente = (id) => {
    const confirmarEliminacion = confirm(
      "¿Estás seguro de eliminar este paciente?"
    );

    if (confirmarEliminacion) {
      const pacientesFiltrados = pacientes.filter(
        (paciente) => paciente.id !== id
      );
      setPacientes(pacientesFiltrados);
    }
  };

  return (
    <div className="">
      <Header />
      <main className="md:flex xl:px-36 p-5 md:py-10 container mx-auto gap-3">
        <Formulario
          crearPaciente={crearPaciente}
          editarPaciente={editarPaciente}
          dataEditar={dataEditar}
          setDataEditar={setDataEditar}
        />
        <ListaPacientes
          pacientes={pacientes}
          setDataEditar={setDataEditar}
          editarPaciente={editarPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </main>
    </div>
  );
}

export default App;
