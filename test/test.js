import { DataHandle } from './../index';

let testMap = {
    a: 1,
    b: 2,
    c: 3,
}
let newTestMap = DataHandle.deleteMapKeys(testMap, ['a']);
console.log(newTestMap);