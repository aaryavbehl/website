import './style.css'
import * as THREE from "three";

class Site {
  constructor() {
    this.time = 0;
    this.container = dom;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.images = [...document.querySelectorAll(.images img)];
    this.material;
    this.imageStore = [];
    this.uStartIndex = 0;
    this.uEndIndex = 1;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 100, 2000 );
    this.camera.position.z = 200;
    this.camera.fov = 2*Math.atan(this.height / 2 / 200)*(180 / Math.PI);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize( this.width, this.height );
    document.body.appendChild( this.renderer.domElement );
    
    this.renderer.render()

    this.addImages();
    this.render();
  }

  addImages(){
    
  }

  render() {
    this.time++;
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Site({
  dom: document.querySelector(".canvas"),
});