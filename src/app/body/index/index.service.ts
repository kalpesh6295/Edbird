import { IndexModel } from "./index.model";
import { Injectable } from '@angular/core';

@Injectable()
export class IndexService {
    public categories:IndexModel[]=[
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Photographer','art never comes from happiness.','../../../../assets/images/photographer.jpg'),
        new IndexModel('Hairstyler','art never comes from happiness.','../../../../assets/images/hairsalon.png'),
        new IndexModel('Fashion Designer','art never comes from happiness.','../../../../assets/images/fashion-design.jpg'),
        new IndexModel('Animator','art never comes from happiness.','../../../../assets/images/animator.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo-artist.jpg')

    ]
}