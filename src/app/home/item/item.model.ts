import { Image } from '../champion/image.model';
import { Gold } from './gold.model';
import { Stats } from './stats.model';

export class Item {
    constructor(
        public description: string,
        public gold: Gold,
        public image: Image,
        public name: string,
        public plainText: string,
        public stats: Stats,
        public tags: string[]
    ) { }
}
