const width = 800;
const height = 600;

const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

let ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

class Particle {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = randomColor(); 
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
    
        if(this.x < 0 || this.x > width){
            this.dx = -this.dx;
        }
        if(this.y < 0 || this.y > height){
            this.dy = -this.dy;
        }
    }
    draw(ctx){

        ctx.fillStyle = this.color;
    
        ctx.fillRect(this.x, this.y, 4, 4);
    }
}

function randomColor() {
	return `hsl(${Math.random() * 360}, ${50 + Math.random() * 50}%, ${50 + Math.random() * 50}%)`;
}


/*
draw(ctx) : dessine la particule sur le canvas Pour la couleur.
Vous pouvez utiliser la méthode fillStyle du contexte 2D.
Vous pouvez utiliser la méthode fillRect du contexte 2D du canvas (ctx) pour dessiner un rectangle de 2 pixels de côté.
*/


const PARTICLE_COUNT = 60;
let particleTab = new Array(PARTICLE_COUNT);

for (let i = 0; i < PARTICLE_COUNT; i++) {
    
    particleTab[i] = new Particle(
        Math.floor(Math.random()*width),
        Math.floor(Math.random()*height),
        Math.random()*8-4,
        Math.random()*8-4);
    
}

function renderParticle(){
    ctx.clearRect(0,0,width,height);
    particleTab.forEach(p => {
        p.update();
        p.draw(ctx);
    });
}

function refresh(){
    renderParticle();
    window.requestAnimationFrame(refresh);
}
refresh()