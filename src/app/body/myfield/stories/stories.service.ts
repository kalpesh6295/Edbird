import { Injectable } from '@angular/core';
import { Story } from './stories.model';

@Injectable()
export class StoriesService {

  private stories:Story[]=[
    new Story('HOW TO CHOOSE A CAREER IF YOU ARE NOT GOOD AT STUDIES?','','','' ),
    new Story('HOW TO CHOOSE A CAREER IF YOU ARE NOT GOOD AT STUDIES?','','','' ),
    new Story('HOW TO CHOOSE A CAREER IF YOU ARE NOT GOOD AT STUDIES?','','','' )
        
]

getstories(){
    return this.stories.slice();
}

}
