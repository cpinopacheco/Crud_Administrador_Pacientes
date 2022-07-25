const Alerta = ({ mensaje }) => {
  return (
    <p className="p-3 md:m-3 bg-red-500 rounded-xl text-center uppercase text-white font-medium">
      {mensaje}
    </p>
  );
};

export default Alerta;
