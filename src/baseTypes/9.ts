/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type Status = 'open' | 'close'
type PageDetails = {
  createdAt: Date,
  updatedAt: Date
}

type page ={
  title:string,
  likes:number,
  accounts:string[],
  status:Status,
  details?:PageDetails
}

const page1:page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-05-01'),
  }
}

const page2:page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};