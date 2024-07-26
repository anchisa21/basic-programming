function helloWorld() {
    console.log('Hi')
}
//ไม่รับ input ไม่มี output
//helloWorld()

function secondHello(name: string) {
    console.log(name)
}
// รับ input แต่ไม่มี output
//secondHello('anchisa')

function getPi() {
    return 3.14
}
//ไม่มี input แต่มี output
//console.log(getPi())

function st(Fname: string, sname: string, Tname: string) {
    if (!(Fname === 'nan' && sname === 'plam') && Tname === 'YO') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}

st('nan' , 'plam' , 'YO')
function anchisa(sex: string, height: number) {
    if (sex === 'ชาย' && height > 170) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
anchisa('ชาย', 160)