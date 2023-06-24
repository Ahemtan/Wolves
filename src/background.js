class Layer {
    constructor(game, width, height, speedModifer, image) {
        this.game = game
        this.width = width
        this.height = height
        this.speedModifer = speedModifer
        this.image = image
        this.x = 0;
        this.y = 0;
    }
    update(){
        if (this.x < -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifer
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game){
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.layer1Image = document.getElementById('layer1')
        this.layer2Image = document.getElementById('layer2')
        this.layer3Image = document.getElementById('layer3')
        this.layer4Image = document.getElementById('layer4')
        this.layer5Image = document.getElementById('layer5')
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1Image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layer2Image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layer3Image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.8, this.layer4Image);
        this.layer5 = new Layer(this.game, this.width, this.height, 1, this.layer5Image);
        this.backgroundLayer = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5];
    }
    update(context){
        this.backgroundLayer.forEach(layer => {
            layer.update(context)
        })
    }
    draw(context) {
        this.backgroundLayer.forEach(layer => {
            layer.draw(context)
        })
    }
}
