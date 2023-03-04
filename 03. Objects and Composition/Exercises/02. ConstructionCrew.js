function constructionCrew(worker){
    if (worker.dizziness === true){
        let requiredAmountOfWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmountOfWater;
        worker.dizziness = false; 
    }
    return worker;
}