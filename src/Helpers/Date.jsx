function getDate() {
  const a = new Date();
  const b = (a.getDate() < 10 ? '0' : '') + a.getDate();
  const c = (a.getMonth() < 10 ? '0' : '') + a.getMonth();
  const d = a.getFullYear();
  const e = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  const f = e[a.getDay()];
  return { day: b, month: c, year: d, dayName: f };
}

export default getDate;
