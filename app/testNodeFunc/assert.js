/**
 * Created by Administrator on 2017/6/9.
 * @param 本模块主要是讲解assert的方法，因为在我们的平时的开发中断言是必不可少的，所以基本都在一一介绍。
 */
const Assert = require('assert');
let exp = module.exports;

/**
 * 测试assert的功能，包括以下函数
 * @param assert == assert.ok()
 * @param assert.deepEqual()
 * @param assert.doesNotThrow()
 * @param
 * */
exp.assertFunc = () => {
    /**
     * @param  assert(value,message) false or true 的判断，false会终端服务器抛出异常错误,例如 0
     * */
    //以下三种都会抛出异常  从结果来看，assert是将目标值和true做比较
    // Assert(0);
    // Assert(false);
    // Assert('');
    //不会抛出异常
    Assert(1);
    Assert('0');
    Assert('false');

    /**
     * @param assert.deepEqual(actual,expected,message)
     * */
    let obj1 = {
        name : 'tom',
        sex : 'boy',
        age : 1
    }
    let obj2 = {
        name : 'tom',
        sex : 'boy',
        age : '1'
    }

    const obj3 = {
        name : 'tom',
        sex : 'boy',
        age : 1
    }
    const obj4 = {
        name : 'tom',
        sex : 'boy'
    }
    
    const obj5 = Object.create(obj1);

    //不会抛出异常
    // Assert.deepEqual(obj1,obj2);
    //不会抛出异常
    Assert.deepEqual(obj1,obj3);
    //会抛出异常
    // Assert.deepEqual(obj3,obj4);
    //会抛出异常  看下面的错误信息，说明原型会被忽略
    //AssertionError: { name: 'tom', sex: 'boy', age: 1 } deepEqual {}
    // Assert.deepEqual(obj1,obj5);
    //也许说忽略原型，大家有的时候会不知道在说什么，大家可以看下面的例子，相信看一下就会明白的
    let testAssert = function () {
        this.name = 'tom';
        this.sex = 'boy';
    }
    testAssert.prototype.age = 1;
    let obj6 = new testAssert();
    //会抛出异常
    //AssertionError: 因为原型被忽略造成的错误
    // Assert.deepEqual(obj1,obj6,'因为原型被忽略造成的错误');
    //不会抛出异常
    Assert.deepEqual(obj6,obj4);

    /**
     * @param assert.doesNotThrow(block,error,message);
     * |______当 assert.doesNotThrow() 被调用时，它会立即调用 block 函数
     * |______________如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError
     * |______________如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者
     * */
    let ErrorMy = function (err) {
        console.log(err);
    }
    //TypeError: error
    // Assert.doesNotThrow(
    //     () => {
    //         throw new TypeError('error');
    //     },
    //     SyntaxError
    // );

    //AssertionError: Got unwanted exception (SyntaxError)..
    // Assert.doesNotThrow(
    //     () => {
    //         throw new SyntaxError('error')
    //     },
    //     SyntaxError
    // );

    //这里会回调抛出错误给我的函数 但是不会造成程序的退出  至于为什么是两次，应该是立即运行一次，然后出错回调一次
    // error here
    // error here
    // Assert.doesNotThrow(
    //     () => {
    //         throw ErrorMy('error here')
    //     },
    //     TypeError
    // );

    /**
     * @param assert.equal()
     * |______做 == 判断
     * */
    //做 == 判断
    Assert.equal(1,'1');
    //抛出错误
    //AssertionError: 不相等的两个值
    // Assert.equal(1,0,'不相等的两个值');

    return 'test of assert'+'\n';
}