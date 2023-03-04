function townsToJson(inputs){
    let towns = [];
    for (let i = 1; i < inputs.length; i++){
        let tokens = inputs[i].split(/\s*\|\s*/);
        let Town = tokens[1];
        let Latitude = Number(Number(tokens[2]).toFixed(2));
        let Longitude = Number(Number(tokens[3]).toFixed(2));  
        let town = {Town, Latitude, Longitude};
        towns.push(town);
    }
    let jsonText = JSON.stringify(towns);
    console.log(jsonText);
}