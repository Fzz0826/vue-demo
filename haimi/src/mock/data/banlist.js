import mock from 'mockjs'

let banList = []

for (let i = 0; i < 6; i++) {
  banList.push({
    img: mock.Random.dataImage('750x392')
  })
}

export default banList
