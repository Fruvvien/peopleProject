import {beforeEach, it, expect, describe} from 'vitest'
import { PersonStatistics } from "./PersonStatistics";

let personStatistics1 = new PersonStatistics();
let personStatistics2 = new PersonStatistics();
let personStatistics3 = new PersonStatistics();
let personStatistics4 = new PersonStatistics();

beforeEach(() =>{
    personStatistics1 = new PersonStatistics(1, "Teszt Elek", 20, true, 90);
    personStatistics2 = new PersonStatistics(2, "Teszt Elek", 22, false, 70);
    personStatistics3 = new PersonStatistics(3, "Teszt Elek", 25, false, 80);
    personStatistics4 = new PersonStatistics(4, "Teszt Elek", 20, true, 85);


})

describe('atlageletkor', ()=>{
    it('vissza adja az atlageletkort', () => {
        
        expect(personStatistics1.getAvargeAge()).greaterThan(0)
    })
})
