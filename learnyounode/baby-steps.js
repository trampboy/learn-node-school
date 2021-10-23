/**
 * Created by JingHongGang on 2021/10/21.
 */
const [nodePath, filePath, ...params] = process.argv
console.log(params.reduce((pre, cur) => Number(pre) + Number(cur), 0))