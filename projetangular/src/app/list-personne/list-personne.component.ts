import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit{

  personnes: Personne[] = [];

  constructor(private personneService: PersonneService,
    private router:Router){
    
  }
  ngOnInit(): void {
    this.getpersonne();
  }
  private getpersonne(){
    this.personneService.findALL().subscribe(data => {
      this.personnes = data;
    });
  }

  modifiezPersonne(id:number){
    this.router.navigate(['modifiez-personnes', id])
  }
  supprimezPersonne(id:number){
    this.personneService.supprimezpersonne(id).subscribe( data => {
      console.log(data);
      this.getpersonne();
    })

  }

  voirPersonne(id:number){
    this.router.navigate(['voir-personnes', id])
  }

}
