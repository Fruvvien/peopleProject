export class PersonStatistics {
    #people = []  

    constructor(personList){
       this.#people = personList
    }

    set people(personList){
        this.#people = personList;
    }

    getAvargeAge(){
        let osszEletkor = 0;
        let atlagEletkor = 0;
        
        for (let index = 0; index < this.#people.length; index++) {
            let element = this.#people[index];
            if(element.age != null && element.age != '' && element.age != 0){
                osszEletkor += element.age ;
            }else{
                return false;
            }
        }
        if(this.#people.length != 0){
            atlagEletkor = osszEletkor / this.#people.length;
            return atlagEletkor;
        }

        return atlagEletkor;
       
    }

    getNumberOfStudents(){
        let count = 0;
        this.#people.forEach(element => {
            if(element.isStudent == true){
                count ++;
            }
            
        });
        return count;

    }

    getPersonWithHighestScore(){
        let biggestScore = 0;
        let personName = "";
        this.#people.forEach(element => {
            if(element.name != ""){
                if(biggestScore < element.score){
                    biggestScore = element.score;
                    personName = element.name;
                }
            }
            
        
        });
        return personName;
    }

    getAvargeScoreOfStudents(){
        let osszPontSzam = 0;
        let atlagPontSzam = 0;
        this.#people.forEach(element => {
            osszPontSzam += element.score;
        });
        if(this.#people.length != 0){
            atlagPontSzam = osszPontSzam / this.#people.length;
            return atlagPontSzam;
        }
        return atlagPontSzam;
       
    }

    getOldestStudent(){
        let biggestAge = 0;
        let personName = "";
        this.#people.forEach(element => {
            if(element.age != '' && element.age != null  && element.age != 0 && element.name != ""){
                if(biggestAge < element.age){
                    biggestAge = element.age;
                    personName = element.name;
                }
            }
            else{
                return false;
            }
            
        
        });
        return personName;
    }

    isAnyoneFailin(){
        let personName = "";
        this.#people.forEach(element => {
            if(element.score != '' && element.score != null && element.name != ""){
                if( element.score < 40){
                    personName = element.name;
                }
            }else{
                return false;
            }
            
        });
        return personName;
    }

    
}


