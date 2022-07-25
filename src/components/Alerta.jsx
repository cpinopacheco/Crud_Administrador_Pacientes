const Alerta = ({ mensaje }) => {
  return (
    <p className="p-3 mb-5 bg-red-500 rounded-xl text-center uppercase text-white font-medium">
      {mensaje}
    </p>
  );
};

export default Alerta;
