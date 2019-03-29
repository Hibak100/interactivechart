import {transform, getValue} from "./TransformData";

describe('TransformData', () => {
  const data ={
    "t1":[{ "name": "p" , "value": 2}],
    "t2":[{ "name": "p" , "value": 5}]
  };

  it('should get value from name', () => {
    const value = getValue(data.t1, "p");
    expect(value).toEqual(2);
  });

  it('should return 0 if name is not found', () => {
    const value = getValue(data.t1, "x");
    expect(value).toEqual(0);
  });

  it('should transform data', () => {
    const transformed = transform(data);
    const p = transformed.find((n)=> n.name === "p");
    expect(p).toEqual({"name": "p", "value": 7});
  });

});
