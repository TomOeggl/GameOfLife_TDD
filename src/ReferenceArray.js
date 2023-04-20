class ReferenceArray {
    constructor(parentGrid){
        this.array = new Array(parentGrid.arrayLength);
        this.parentGrid = parentGrid;
        this.indexObject = {};
    }

    getLength(){
        return this.array.length;
    }

    setKeyAndDefaultValue(key, defaultValue){
        for(let i = 0; i < this.array.length; i++){
            this.array[i] = {[key] : defaultValue};
        }
    }

    
}

module.exports = ReferenceArray;