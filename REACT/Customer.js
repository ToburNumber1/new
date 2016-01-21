/**
 * Created by lixuefeng on 16-1-16.
 */
window.customer_list=Reat.creatClass({
    get_customer_list:function(){
        return{
            customers:[]
        }
    }
    get_from_json:function(){
        var data=this;
        $.ajax({
            url:"../OrderMaster/JSON/Customers.json",
            dataType:"json",
            dsync:true,
            customers_array:function(item){
                data.setState({
                    customers:item.man
                })
            }
        })
    }
    select:function(data){
        localStorage.setItem("man",data)
        this.props.history.pushState(null,'/order')
    }
        show_html:function(){
            {var customers_html= _.map(this.stste.customers,function(men){
                return (
                <li className="apper">
                    <div className="css_button_style" onclick={this.select.bind(this,men)}>{men}</div></li>;
                )
            },this)}
                    return(
                        <div className="order">
                            <li class="apper">
                            <button className="back">back</button> 选人</li></div>
                            {customers_html}
                    )
        }
})