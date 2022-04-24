import { context, PersistentUnorderedMap} from "near-sdk-as";
export const reservationStorage = new PersistentUnorderedMap<string, Reservation>("rs")

@nearBindgen
export class Reservation{
    
    id: string;
    name: string;
    place: string;
    persons: string;
    date: string;
   
    constructor (name:string, place:string, persons:string, date:string){
       this.id = context.blockIndex.toString().slice(2, 8);
       this.name = name;
       this.place = place;
       this.persons = persons;
       this.date = date;
    }
    static setReservation(name:string, place:string, persons:string, date:string): Reservation{
        let newReservation = new Reservation(name,place,persons,date);
        reservationStorage.set(newReservation.id, newReservation);
        return newReservation;
    }
    static getReservation(id:string): Reservation | null{
        return reservationStorage.get(id);
        
      } 
}
