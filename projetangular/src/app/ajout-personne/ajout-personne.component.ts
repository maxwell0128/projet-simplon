import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit{
  
  personne:Personne = new Personne();
  constructor(private personneservice:PersonneService,private router: Router) {
    
  }
  ngOnInit(): void {

  }
  savePersonne(){
    this.personneservice.ajoutezpersonne(this.personne).subscribe (data=>{
      console.log(data);
      this.gotoPersonnelist();
    },
    error => console.log(error));
  }

  gotoPersonnelist(){
    this.router.navigate(['/personnes']);
  }

  onSubmit(){
    console.log(this.personne)
    this.savePersonne();
  }

}
