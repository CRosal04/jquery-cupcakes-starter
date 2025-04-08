let cupcakesCollection = null;

/*$.get("https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json", function(data){
    displayCupcakes(data);

    cupcakesCollection = data;

}   ,"json").fail(function(){
$("#cupcakes").empty();
$("#cupcakes").append("<div>there was a problem trying to connect with the server, please try again</div>");
});*/
$.ajax({
    url:"https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json",
    method:"GET",
    datatype: "json"
}).done(function(data){
displayCupcakes(data);
}).fail(function(){
    $("#cupcakes").empty();
    $("#cupcakes").append("<div>there was a problem trying to connect with the server, please try again</div>");

});
function displayCupcakes(data){
    $("#cupcakes").empty();
    let html = "";
    ///iterate through cupcakes
    for (let cupcake of data){
        html += 
        `<section>
        <img src ="${cupcake.image}" alt = "${cupcakes.alt}">
        <h4>${cupcake.name}</h4>
        <b>Ingredients:</b>
        <p class="ingredients">${cupcake.ingredients}</p>
        <b>${cupcake.frosting} Frosting</b>
        <p class="frosting">${cupcake.frostingIngredients}</p>
        </section>`;
    }
    $("#cupcakes").html(html);
}