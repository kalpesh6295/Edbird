import { IndexModel } from "./index.model";
import { Injectable } from '@angular/core';

@Injectable()
export class IndexService {
    public categories:IndexModel[]=[
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Photographer','art never comes from happiness.','../../../assets/images/photographer.jpg'),
        new IndexModel('Hairstyler','art never comes from happiness.','../../../assets/images/hairsalon.jpg'),
        new IndexModel('Fashion Designer','art never comes from happiness.','../../../assets/images/fashion_design.jpg'),
        new IndexModel('Animaton','art never comes from happiness.','../../../../assets/images/animator.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg'),
        new IndexModel('Tattoo-artist','art never comes from happiness.','../../../../assets/images/tattoo_artist.jpg')

    ]
}