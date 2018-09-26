export default (dataArray) =>
  dataArray.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
