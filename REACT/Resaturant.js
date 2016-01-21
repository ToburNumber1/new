/**
 * Created by lixuefeng on 16-1-17.
 */
window.Resaturant=React.createClass({
    resaturant_list:function(){
        return{
            resaturant:[]
        }
    }
    get_resaturant:function(){
        get_from_json:function(){
            var data=this;
            $.ajax({
                url:"../OrderMaster/JSON/Resaturant.json",
                dataType:"json",
                dsync:true,
                resaturant_array:function(item){
                    data.setState({
                        resaturant:item.resaturant
                    })
                }
            })
        }
        select:function(data){
            localStorage.setItem("shop",data)
            this.props.history.pushState(null,'/order')
        }
        render:function(){
            {
                var resaturant_list= _.map(this.state.resaturant,function(shop){
                    return(
                    <li className='apper'><div class='css_button_style' onclick={this.select.bind(this,shop)}>{shop}</div></li>;
                    )},this)
            }
        return(
            <div className="order">
            <li class="apper">
            <button className="back">back</button> 选餐厅</li></div>
        {resaturant_list}
        )
        }

})