import React from 'react';
// import Event from './Event';
import "./event.css"
import Introduce from './Introduce';
import Add from './Add';
class Father extends React.Component{
    constructor(props){//构造函数中增加数据，固定写法
        super(props)//调用父级方法
        this.state={//所有数据写在state状态里
            list: ['网页介绍','网页特性','开发者'],
               text: '',}
        this.handleChange = this.handleChange.bind(this);//bind绑定this
    };
    render(){
        return(
        <div >
        <input 
        //绑定数据
        value={this.state.text} 
        //事件绑定 onchang状态值变化
        onChange={this.handleChange}/>
        <button onClick={this.addList.bind(this)}>添加功能</button>
        <ul id='name'>
            {
                this.state.list.map((item,index)=>{
                    return<li key={index}>
                        <a >{item}</a></li>
                })
            }
        </ul>
        {/* <Event list={this.state.list}></Event> */}
        <Introduce></Introduce>
        </div> 
        )
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
        
      }//e默认的传递参数
    addList(){
        this.setState({
            list:[...this.state.list,this.state.text],
            text:""
        })
    }
    
}
export default Father