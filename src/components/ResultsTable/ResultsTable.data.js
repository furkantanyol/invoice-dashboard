let counter = 0

function createData(type, fileNumber, debtor, issue, expiration_date, amount) {
  counter += 1
  return {
    id: counter,
    type,
    fileNumber,
    debtor,
    issue,
    expiration_date,
    amount
  }
}

// you can play with the data here. if data is empty or undefined it will show no results
const dummyData = [
  createData(
    'Invoice 1',
    3312032,
    `98.123.123-5
    Sociedad Comercial Tres
    Estrenos Limitada`,
    '01/09/2019',
    '01/09/2019',
    3321212123
  ),
  createData(
    'Invoice 2',
    3312032,
    `98.123.123-5
    New England Street`,
    '02/09/2019',
    '02/09/2019',
    123124123
  ),
  createData(
    'Invoice 3',
    3312032,
    `98.123.123-5
    Toriantes Fortada`,
    '03/09/2019',
    '03/09/2019',
    1341234
  ),
  createData(
    'Invoice 4',
    3312032,
    `98.123.123-5
    US Manifacturing`,
    '04/09/2019',
    '04/09/2019',
    132423423
  ),
  createData(
    'Invoice 5',
    3312032,
    `98.123.123-5
    Port Kembla`,
    '05/09/2019',
    '05/09/2019',
    6456453
  ),
  createData(
    'Invoice 6',
    3312032,
    `98.123.123-5
    Shellharbour Junction`,
    '06/09/2019',
    '06/09/2019',
    3456456
  ),
  createData(
    'Invoice 7',
    3312032,
    `98.123.123-5
    Victoria St`,
    '07/09/2019',
    '07/09/2019',
    8634564
  ),
  createData(
    'Invoice 8',
    3312032,
    `98.123.123-5
    Rockafeller Studio`,
    '08/09/2019',
    '08/09/2019',
    87474566
  ),
  createData(
    'Invoice 9',
    3312032,
    `98.123.123-5
    Sociedad Comercial Tres
    Estrenos Limitada`,
    '09/09/2019',
    '09/09/2019',
    45463564
  ),
  createData(
    'Invoice 10',
    3312032,
    `98.123.123-5
    Paris`,
    '10/09/2019',
    '10/09/2019',
    2345251
  ),
  createData(
    'Invoice 11',
    3312032,
    `98.123.123-5
   Tokyo`,
    '11/09/2019',
    '11/09/2019',
    115234534
  ),
  createData(
    'Invoice 12',
    3312032,
    `98.123.123-5
    Sinming Robots`,
    '13/09/2019',
    '13/09/2019',
    11245234
  ),
  createData(
    'Invoice 13',
    3312032,
    `98.123.123-5
    Chemistry Warehouse`,
    '21/09/2019',
    '21/09/2019',
    34534
  )
]

export { dummyData }
