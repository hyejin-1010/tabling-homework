function formatValue(value) {
  if (value < 10) { return `0${value}`; }
  return value;
}

export default function timeFormat(date) {
  date = new Date(date);
  return `${formatValue(date.getHours())}:${formatValue(date.getMinutes())}`;
}
