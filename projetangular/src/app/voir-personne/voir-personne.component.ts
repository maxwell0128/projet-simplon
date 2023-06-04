import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-voir-personne',
  templateUrl: './voir-personne.component.html',
  styleUrls: ['./voir-personne.component.css']
})
export class VoirPersonneComponent implements OnInit{
  id!:number
  personne!:Personne
  constructor( private route:ActivatedRoute, private personneService:PersonneService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personne = new Personne();
    this.personneService.getpersonneById(this.id).subscribe(data =>{
      this.personne=data;
    });

  }

}
