/**
 * Created by lixuefeng on 16-1-17.
 */
window.View=React.createClass({
    get_array:function(){
        return{
            foods:[]
            customers:[]
        }
    }
    get_order_info:function(){
        this.setState({
            foods:JSON.parse(localStorage.getItem("info")||"[]")
        })
        var data=this
        $.ajax({
            url:"../OrderMaster/JSON/Customers.json",
            dataType:"json",
            dsync:true,
            customers_array:function(item){
                data.setState({
                    customers:item["man"]
                })
            }
        })
    }
    back_to_order:function(){
        this.props.history.pushState(null,'/')
    }
    render:function(){
        var order_num = [];
        var order_list_html= _.map(this.stste.foods,function(item){
            if (order_num.indexOf(item.name) == -1) {
                order_num.push(item.name);
            }
            var change_color=(list.price>12)?"red":"black";
            return (
                    <div>
                <div className='someone'><span className='return-na'>{item.man}</span><span className='return-pr'>{item.shop+""+item.food}</span><span className='return' id="price_num" style={{change_color:change_color}}>{item.price}</span></div>;
            </div>
        )
        })
var no_order_array=[]
var no_order_num= _.map(this.state.customers,function(item){
    if (order_num.indexOf(item) == -1) {
        no_order_array.push(item);
    }
})
var no_order_array_html= _.map(this.state.customers,function(names){
    return (
        <div class='someone'><span class='per_no'>{names}</span></div>";
    )
})
var sum=0
var sum_price= _.map(this.state.foods,function(some){
    var cost=JSON.parse(some.money)
    sum+=cost
})
return (
    <div className="order">
    <li className="apper">

    <button className="back" onclick={this.back_to_order}>back</button>

    订单显示
    </li>
    </div>
    <div>
    <div className="num">&nbsp;&nbsp;{order_num.length} 人已定
    </div>
    {order_list_html}
    <div className="num">&nbsp;&nbsp;{no_order_array.length}人未订
    </div>
    {no_order_array_html}
    <div className="last">{order_num.length} 人已定, {no_order_array.length}人未订, 总计{sum}元
    </div>
    </div>
    )
}
})
