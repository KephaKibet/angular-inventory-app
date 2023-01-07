import { Component } from '@angular/core';
import { Room } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  {

  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms = false

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 10,
    totalRooms: 30
  }



  toggle(){
      this.hideRooms =!this.hideRooms;
    }
}
