import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlowerComponent } from './flower/flower.component';
import { Demo1Component } from './demo1/demo1.component';
import { ListComponent } from './list/list.component';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:Demo1Component},
  {path:'list',component:ListComponent},
  {path:'contact',component:ContactComponent},
  {path:'flower',component:FlowerComponent,data:[
    [{
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
    },
    {
      name:'Gardenia',
      price : 50,
      image:"https://www.gardendesign.com/pictures/images/900x705Max/site_3/steady-as-she-goes-gardenia-gardenia-jasminoides-proven-winners_16970.jpg"
  
    },
    {
      name: 'Plumeria',
      price: 80,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS39pRuxgyDIyDp_mLlU80pKaEEoWr8VZRZ6wOXVuXRRaqheHkVIWzmA1xusL9E0B7UPHEEHcRAnShqXTw&psig=AOvVaw1zodTrROGXQM7DUaDHrLB5&ust=1686993935672000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjjrqO8x_8CFQAAAAAdAAAAABAE" ,
  
    },
    {
      name: 'Hyacinth',
      price :40,
      image:"https://www.shutterstock.com/image-photo/large-flower-bed-multicolored-hyacinths-260nw-1681575949.jpg"
    },
    {
      name: 'Marigold',
      price :150,
      image:"https://gardenerspath.com/wp-content/uploads/2022/03/Best-Marigold-Varieties-Feature.jpg" ,
    },
    {
      name: 'Bachelors',
      price :100,
      image:"https://www.allaboutgardening.com/wp-content/uploads/2021/11/Bachelors-Button-960x534.jpg" ,
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Camellia-960x534.jpg',
        name: 'Camellia',
      price :230,
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Cape-Leadwort-960x534.jpg',
        name: 'Cape Leadwort',
      price :210,
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/11/Chrysanthemum-960x534.jpg',
        name: 'Chrysanthemum ',
      price :190,
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/Egyptian-Blue-Water-Lily-960x534.jpg',
        name: 'Blue Water Lily',
      price :200,
    },
    {
      image: 'https://www.allaboutgardening.com/wp-content/uploads/2021/12/English-Rose-960x534.jpg',
        name: 'English Rose ',
      price :250,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/WhiteGazania.JPG/659px-WhiteGazania.JPG?20090611043035',
        name: 'African Daisy ',
      price :210,
    }]
  
    
  
]},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
