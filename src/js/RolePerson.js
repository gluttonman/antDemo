/**
 * Created by Lijun on 2018/1/12.
 */
'use strict'


import React,{Component} from "react"
import PropTypes from "proptypes"

class RolePerson extends Component{

    render(){
        let match = this.context.router.route.match
        const roleId = match.params.roleId

        console.info(roleId)
        return <div>
            <h1>角色用户{roleId}！111</h1>
        </div>
    }
}

RolePerson.contextTypes = {
    router : PropTypes.object.isRequired
}
export default RolePerson

