import { DataHandle } from './../index';

let testMap = {
    a: 1,
    b: 2,
    c: 3,
}
let newTestMap = DataHandle.deleteMapKeys(testMap, ['a']);
console.log('删除map中的key：', newTestMap);

let date = DataHandle.formatDate(new Date(), 'yyyy-MM-dd hh:ms:ss');
console.log(date);
