export class ScreenSizeService {
    width: string;

    constructor(private screenConfg: IConfig) {
        this.width = this.getSize();    
        window.addEventListener('resize', (event) => {
            this.width = this.getSize();
        }); 
    }

    getSize(){
        if (window.innerWidth < this.screenConfg.medium){
            return 'small';
        }
        else if ((this.screenConfg.medium <= window.innerWidth) && (window.innerWidth < this.screenConfg.large)) {
            return 'medium';
        }
        else if (this.screenConfg.large <= window.innerWidth){
            return 'large';
        }
    }
}