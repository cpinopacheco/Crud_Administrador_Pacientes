export const formatearFecha = (date) => {
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const anio = date.getFullYear();

  const fechaFormateada = `${anio}-0${mes}-${dia}`;

  return fechaFormateada;
};
