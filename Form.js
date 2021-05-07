class Form {
    constructor(){
        //this.background = createImg("./background.jpg");
        this.title = createElement("h1","A SURVEY TO BRING ABOUT CHANGE");
        this.name = createInput("Name");
        this.email = createInput("Email");
        this.q1 = createElement("h3","Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio();
        this.radio.option('  Yes');
        this.radio.option('  No');
        this.q2 = createElement("h3","Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio();
        this.radio1.option('  Yes');
        this.radio1.option('  No');
        this.q3 = createElement("h3","Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio();
        this.radio2.option('  100');
        this.radio2.option('  500');
        this.radio2.option('  1000');
        this.radio2.option('  More');
        this.radio2.option('  NA');
        this.submit = createButton("SUBMIT");
    }
    display(){
        //this.background.position(0,0);
        this.title.position(windowWidth/4,50);
        this.name.position(200,200);
        this.email.position(200,250);
        this.q1.position(200,300);
        this.radio.position(200,350);
        this.q2.position(200,400);
        this.radio1.position(200,450);
        this.q3.position(200,500);
        this.radio2.position(200,550);
        this.submit.position(200,600);
    }
}