/**
 * Created by Administrator on 2017/6/9.
 */
const assertModule =require('./assert');

let exp = module.exports;
let startTest = {
    test : function () {
        return 'test';
    },
    start : function () {
        let resultStr = '';
        resultStr += assertModule.assertFunc();
        return resultStr;
    }
};
exp.startFunc = startTest;