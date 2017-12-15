import mock from 'mockjs'

let tjList = []

for (let i = 0; i < 8; i++) {
  tjList.push({
    img: mock.Random.dataImage('375x240')
  })
}

export default tjList
