export function transform (data) {
  let p = 0 , ne = 0, nu = 0, na = 0;
  Object.keys(data).forEach((table)=>{
    const t = data[table];
     p  += getValue(t, "p");
     ne += getValue(t, "ne");
     nu += getValue(t, "nu");
     na += getValue(t, "na");
  });
  return [
    {
      name: "p",
      value: p
    },
    {
      name: "ne",
      value: ne
    },
    {
      name: "nu",
      value: nu
    },
    {
      name: "na",
      value: na
    }
  ];
}

function getValue (table, name) {
  const findName = table.find((item) => item.name === name);
  if(findName) {
    return findName.value;
  }
  return 0;
}