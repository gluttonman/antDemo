/**
 * Created by Lijun on 2018/1/15.
 */
import Mock from "mockjs"
import DateFormat from "date-format"
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        title: i===0?"撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰撒大声地发送到法是否打算的发顺丰":`李大嘴${i}`,
        catetory_name: "分类"+ i%10,
        isMy: i%2===0?true:false,
        id: i,
        create_time: DateFormat("yyyy-MM-dd hh:mm:ss",new Date())
    });
}
Mock.mock ("/yx/article/getMyArticleList",data)
