/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-
 *Email: lovewinders@163.com
 *Date: 2017-05-04 14:23
 */
import Test from './components/test/test.jsx';
console.log(Test);
console.log(Test());

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, browserHistory, hashHistory, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

/*GoodsDesc class*/
class GoodsDesc extends React.Component {
    render(){
        return (
            <div className="test" style={{backgroundColor: 'red'}}>我是测试路由router的商品描述</div>
        );
    }
}

/*es6 class写法*/
class DataBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //text: props.initialValue || '请输入。。。'
            text: props.test || '请输入。。。'
        };
        // ES6 类中函数必须手动绑定
        //this.handleChange = this.handleChange.bind(this);//方法2用箭头函数绑定 this，不用bind this
    }
    /*handleChange(event){
     this.setState({
     text: event.target.value
     });
     }*/
    handleChange = (event) =>{
        this.setState({
            text: event.target.value
        });
    };
    render(){
        let text = this.state.text;
        return (
            <div className="test" style={{backgroundColor: 'green'}}>
                <input type="text" onChange={this.handleChange} />
                <p>{text}</p>
            </div>
        );
    }
}
DataBank.PropTypes = {
    initialValue: PropTypes.string
};
DataBank.defaultProps = {//set defaultProps
    initialValue: ''
};

class Roots extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>
                    <Link to="/">首页</Link><br/>
                    <Link to="/index">首页index</Link><br/>
                    <Link to="/GoodsDesc">详情页</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
//配置整个页面的路由结构
const RouterConfig = (
    <HashRouter history={history}>
        <Roots>
            <Route exact path="/" component={DataBank}/>
            <Route path="/index" component={DataBank}/>
            <Route path="/goodsDesc" component={GoodsDesc}/>{/*商品描述*/}
        </Roots>
    </HashRouter>
);
ReactDOM.render(
    RouterConfig,
    document.getElementById('example')
);
