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

    getAllEntriesWithValue(valueToMatch){
        let filteredArray = [];
        let key = Object.keys(this.array[0])[0];
        
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i][key] === valueToMatch){
                filteredArray.push(i);
            }
        }
        return filteredArray;
    }
}

module.exports = ReferenceArray;