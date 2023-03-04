function solve(area, vol, input){
    let objects = JSON.parse(input);
    function calc(obj){
        let areaObj = area.call(obj);
        let volumeOBj = vol.call(obj);
        return {area: areaObj, volume: volumeOBj};
    }
    return objects.map(calc);

    function area(){
        return Math.abs(this.x * this.y);
    }

    function vol() {
        return Math.abs(this.x * this.y * this.z);
    }
}