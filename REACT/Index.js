/**
 * Created by lixuefeng on 16-1-17.
 */
window.Index=React.creatClass({
    show_order:function(){
        this.props.history.pushState(null,'/Order')
    }
    view_order:function(){
        this.props.history.pushState(null,'/ViewOrder')
    }
    render:function(){
        return(
            <div>
            <div className="order">订餐</div>
            </div>
            <div>


            <div className="distance">
            <div className="choose" onclick={this.show_order}>帮订餐

            </div>
            </div>
            <div className="distan">
            <div className="choose" onclick={this.view_order}>看订单

            </div>
            </div>

            </div>
        )
    }

);

})
