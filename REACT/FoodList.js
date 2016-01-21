/**
 * Created by lixuefeng on 16-1-17.
 */
window.food_list=React.createClass({
    food_list:function(){
        return{
            food_lists:[]
        }
    }
    get_foods:function(){
        var data=this;
        var items=this
        $.ajax({
            url:"../OrderMaster/JSON/FoodsList.json",
            dataType:"json",
            dsync:true,
            resaturant_array:function(item){
                data.setState({
                    foods:item["food_lists"][localStorage.getItem("shop")]
                })
            }
        })
    }
    select:function(foods,price){
        localStorage.setItem("food",foods)
        localStorage.setItem("shop",price)
        this.props.history.pushState(null,'/order')
    }
    render:function(){
        var{food_list_html=_.map(this.state.food_lists,function(item){
            return(
                <li className='apper'><div classNme='choose-style' onclick={this.select.bind(this,item.foods,item.price)}>{item.foods}<p className='css_font_style'><p className='same_body'>{item.price}</p></div></li>
            )
        },this)}
            return (
                <div className="order">
    <li class="apper">
    <button className="back">back</button>选套餐</li></div>
{food_list_html}
            )
    }

})