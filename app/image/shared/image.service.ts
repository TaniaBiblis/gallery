import {Injectable} from "@angular/core";
@Injectable()
export class ImageService{
  visibleImages = [];
getImages(){
  return this.visibleImages = IMAGES.slice(0);
}

getImage(id: number){
  return IMAGES.slice(0).find(image => image.id == id)
}
}
const IMAGES = [
  {"id":1, "category": "mountains", "caption": "Mountain landscape", "url": "assets/img/mount_01.jpeg"},
  {"id":2, "category": "mountains", "caption": "Peaceful beauty", "url": "assets/img/mount_02.jpeg"},
  {"id":3, "category": "mountains", "caption": "Gorgeous view", "url": "assets/img/mount_03.jpeg"},
  {"id":4, "category": "forest", "caption": "Eternal secrets of Mother Nature", "url": "assets/img/forest_01.jpeg"},
  {"id":5, "category": "forest", "caption": "Lost or wonder?", "url": "assets/img/forest_02.jpeg"},
  {"id":6, "category": "forest", "caption": "Enchantress", "url": "assets/img/forest_03.jpeg"},
  {"id":7, "category": "lake", "caption": "A drop of purity", "url": "assets/img/lake_01.jpeg"},
  {"id":8, "category": "lake", "caption": "Glittering drops", "url": "assets/img/lake_02.jpeg"},
  {"id":9, "category": "lake", "caption": "Closer to depth", "url": "assets/img/lake_03.jpeg"}
]
