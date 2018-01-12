
/**
 * Created by Lijun on 2018/1/4.
 */


import Mock from "mockjs"

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        hd_name: i===0?"撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰":`李大嘴${i}`,
        lx_name: 32,
        isMy: i%2===0?true:false,
        id: i
    });
}
Mock.mock ("/yx/manage/getHdList",data
)
