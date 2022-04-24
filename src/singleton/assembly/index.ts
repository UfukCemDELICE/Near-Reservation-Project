import { Reservation, reservationStorage} from "./model";

export function setReservation(name:string, place:string, persons:string, date:string): Reservation{
  return Reservation.setReservation(name, place, persons, date);
}

export function getReservation(id:string): Reservation | null {
  return Reservation.getReservation(id);
}

export function reservations(): Array <Reservation>{
  return reservationStorage.values();
}
