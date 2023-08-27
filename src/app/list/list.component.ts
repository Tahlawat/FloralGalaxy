import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Flower} from '../types/Flower';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {
  flowers:Flower[]=[
    {
    name:'Rose',
    price : 50,
    image:"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRoZC_JQAsW5rB_YteF6L0u0o94iMUKzkHxa8ibXSoB79pY8mNVv5BnbKehy7mZTEBS&psig=AOvVaw2JPZZ6eso0lxL0x4nIfIf9&ust=1686637701408000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPC7vqONvf8CFQAAAAAdAAAAABAE" ,

  },
  {
    name: 'Dahlia',
    price: 80,
    image:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Dahlia_x_hybrida.jpg" ,

  },
  {
    name: 'Tulip',
    price :40,
    image:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRlzUbk-IVcCnLDHwgetsoSG21I4VHHhLREmZub060FXNyLQc4rJkMXU_-cs9brY74Q" ,
    
  },
  {
    name: 'Orchid',
    price :150,
    image:"/assets/orchids.jpg" ,
  }
  
    
  
];
    
   
constructor(){}
ngOnInit(): void{}
   
    isDisabled = false;
    isShowing:boolean=true;

    handleClick(){
      alert("flowers");
    }
    myName:string=''; 
    toggleFlowers(){
      this.isShowing=!this.isShowing;
    }

}

