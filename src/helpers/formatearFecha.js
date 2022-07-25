export const formatearFecha = (date) => {
  const d = new Date(date);

  const dia = d.getDate();
  const mes = d.getMonth() + 1;
  const anio = d.getFullYear();

  const fechaFormateada = `${anio}-0${mes}-${dia}`;

  return fechaFormateada;
};
