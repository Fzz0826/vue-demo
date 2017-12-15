import mock from 'mockjs'

let togeList = []

for (let i = 0; i < 1000; i++) {
  togeList.push({
    img: mock.Random.dataImage('375x375'),
    con: mock.Random.ctitle(),
    money: mock.Random.float(300, 1000, 2, 2)
  })
}

export default togeList
