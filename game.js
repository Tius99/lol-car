class game{
constructor(){

}
gameState(){

var gameStateRef=database.ref('gameState')

gameStateRef.on|("value",function (data) {

    gameState=data.val();

})

}
update(state){

database.ref('/').update({
    gameState:state
})

}
start(){
    if (gamestate===0) {

player=new player();
player.getCount();
form=new form();
form.display();        
    }
}



}