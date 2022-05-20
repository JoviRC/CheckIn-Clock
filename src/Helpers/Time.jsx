function getTime() {
  const a = new Date();
  const b = (a.getHours() < 10 ? '0' : '') + a.getHours();
  const c = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
  const d = (a.getSeconds() < 10 ? '0' : '') + a.getSeconds();
  return { hours: b, minutes: c, seconds: d };
}

export default getTime;
