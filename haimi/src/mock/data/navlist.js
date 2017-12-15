import mock from 'mockjs'

let navList = []

for (let i = 0; i < 11; i++) {
  navList.push({
    title: mock.Random.cword(2),
    id: i,
    type: i === 0 ? 1 : 2
  })
}

export default navList
