/**
 * Created by lixuefeng on 16-1-17.
 */
window.Order = React.createClass({
    init: function () {
        $("#food")[0].value = localStorage.getItem("food");
        $("#rest")[0].value = localStorage.getItem("shop");
        $("#name")[0].value = localStorage.getItem("man")
    }
    get_info: function () {
        var all_info = {
            person: localStorage.getItem("man")
            shop: localStorage.getItem("shop")
            price: localStorage.getItem("money")
            food: localStorage.getItem("food");
    }
    var local_info=JSON.parse(localStorage.getItem("info")) || [];

        var obj_info = {name: person, shop: shop, food: food, money: price};
        array_info.push(obj_info);
        localStorage.setItem("info", JSON.stringify(local_info));
    }
    clean_item:function(){
        document.getElementById("name").value="";
        document.getElementById("rest").value="";
        document.getElementById("food").value="";
        localStorage.removeItem("man");
        localStorage.removeItem("shop");
        localStorage.removeItem("food");
        localStorage.removeItem("money")
    }
    judge_element:function(){
        if (!(document.getElementById("rest").value != "" && document.getElementById("name").value != "" && document.getElementById("food").value != "")) {
            this.clean_item()
            this.judge_element
        }
        else{
            $("#test").attr("disabled", false)
        }
        beck_to_order:function(){
            this.props.history.pushState(null,'/')
        }
        beck_to_customer:function(){
            this.props.history.pushState(null,'/Customer')
        }
        beck_to_resaturant:function(){
            this.props.history.pushState(null,'/Resaturant')
            document.getElementById("food").value="";
            localStorage.removeItem("food");
        }
        beck_to_foodlist:function(){
            if (document.getElementById("rest").value == "") {
                $("#bin_stop").attr("disabled", false)
            }
            else {
                this.props.history.pushState(null, '/FoodList')
            }
        }
        render:function(){
            return(
                <div>
                <div className="top_distance">
                <div>
                <div className="font_distance">人：</div>
                <input className="input_font" id="name" name="input_one" type="text" disabled>
                <div id="bin_go" type="button" className="button_order" onclick={this.beck_to_customer}>选人 </div>
                <div className="font_distance">餐厅：</div>
                <input className="input_font" id="rest" name="shop_input" type="text" disabled>
                <div id="bin_way" className="button_order" type="button" onclick={this.beck_to_resaturant}>选餐厅</div>
                <div className="font_distance">套餐：</div>
                <input className="input_font" id="food" name="input_food" type="text" disabled>
                <div id="bin_stop" className="button_orders" onclick={this.beck_to_foodlist}>选套餐</div>
                <div id="test" className="button_ensure" onclick={this.judge_element}>确认</div>
                </div>
                </div>
                </div>
            )
        }
    }
}
})