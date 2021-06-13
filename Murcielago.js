class Murcielago extends Enemigo {
    constructor(x,y,dir){
        super(x,y,dir)
        this.activo = true;
    }
mostrar(){
    image(muercie, this.x, this.y);
    
}

}