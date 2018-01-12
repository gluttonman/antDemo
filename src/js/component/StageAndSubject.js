/**
 * Created by Lijun on 2018/1/10.
 */


import React,{Component} from "react"
import {Form, Select} from "antd"

const Option = Select.Option;
const FormItem = Form.Item
class  StageAndSubject extends Component{
    constructor(){
        super();
        this.state={
            stage:[{id:4, value:"小学"},{id:5, value:"初中"},{id:6, value:"高中"}],
        }
        this.subject = {4:[{id:26,value:"语文"},{id:2,value:"数学"},{id:3,value:"英语"},{id:4,value:"历史"}],
            5:[{id:26,value:"语文"},{id:2,value:"数学"},{id:3,value:"英语"},{id:4,value:"历史"},{id:6,value:"物理"}],
            6:[{id:26,value:"语文"},{id:2,value:"数学"},{id:3,value:"英语"},{id:4,value:"历史"},{id:6,value:"化学"}]
        }
    }

    componentWillMount(){
        let subject = this.subject[this.state.stage[0].id];
        this.setState({subject: subject});
    }

    handleStageChange(value){
        let subject = this.subject[value];
        this.setState({subject: subject})
    }
    render(){
        const stageData = this.state.stage
        const subjectData = this.state.subject
        const stageOption = stageData.map(item=><Option key={item.value+"_"+item.id} value={item.id}>{item.value}</Option>)
        const subjectOption = subjectData.map(item=><Option key={item.value+"_"+item.id} value={item.id}>{item.value}</Option>)
        return (
            <FormItem {...this.props}>
                <Select style={{width: 100}} defaultValue={stageData[0].value} onChange={(value)=>this.handleStageChange(value)}>
                    {stageOption}
                </Select>
                <Select style={{width: 100, marginLeft:20}} defaultValue={subjectData[0].value}>
                    {subjectOption}
                </Select>
            </FormItem>
        )
    }
}

export default StageAndSubject