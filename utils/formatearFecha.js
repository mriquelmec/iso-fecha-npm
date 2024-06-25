import dayjs from 'dayjs';

const formatearFecha = (fecha) => {
  return dayjs(fecha).format('DD-MM-YYYY');
};

  const fechaLarga = (fecha) => {
    return dayjs(fecha).format('MMMM, dddd D, [of the year] YYYY');
  };

  const fechaCorta = (fecha) => {
    return dayjs(fecha).format('DD/MM/YYYY');
  };

export { formatearFecha, fechaLarga, fechaCorta };