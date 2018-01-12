
/**
 * Created by Lijun on 2018/1/4.
 */


import Mock from "mockjs"

let user = Mock.mock({id:1, name:'lily'})
let userData = {id:1, name:'lily', password:"1"};
Mock.mock ("/users",{
    data:userData
   }
)

Mock.mock("/manage",{
    data:{success: true}
})