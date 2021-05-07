class User{
    constructor(){
        this.index = null;
        this.name = "";
        this.email = "";
        this.answer = [];
    }
    getPeopleCount(){
        database.ref("peopleCount").on("value", function(data){
            peopleCount = data.val();
        })
    }
    updatePeopleCount(count){
        database.ref("/").update({
            peopleCount : count,
        })
    }
    updateDetails(){
        database.ref("voter"+this.index).set({
            name : this.name,
            email : this.email,
            answer : this.answer,
        })
    }
}