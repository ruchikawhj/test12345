class Test{
    constructor(){
        this.age=25;
        this.button=createButton("Click Me");
        this.button.position(100,100);
        this.button.size(100,100)
    }
    handleMousePressed(){
        this.button.mousePressed(()=>{
            console.log(this.age)
        })
    }
    display(){
        this.handleMousePressed();
    }
}