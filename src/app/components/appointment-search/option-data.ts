export class optionData{
    public id: number;
    public label: string;

    constructor(id,label){

        this.id = id;
        this.label = label;
    }

    public getId(){
        return this.id
    }
    public getLabel(){
        return this.label
    }
}