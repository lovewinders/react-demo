/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-05 16:56
 */

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


class Roots extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
const RouterConfig = (
    <HashRouter history={history}>
        <Roots>
            <Route exact path="/" component={DataBank}/>
            <Route path="/index" component={DataBank}/>
            <Route path="/goodsDesc" component={GoodsDesc}/>{/*商品描述*/}
        </Roots>
    </HashRouter>
);
export default Roots;