import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-personne',
  templateUrl: './modif-personne.component.html',
  styleUrls: ['./modif-personne.component.css']
})
export class ModifPersonneComponent implements OnInit {
  id!:number;
  personne!:Personne;
  constructor(private personneservice:PersonneService,
    private route:ActivatedRoute,
    private router : Router){

  }
  
  ngOnInit(): void {
    this.personne = new Personne()
    this.id = this.route.snapshot.params['id'];
    
    this.personneservice.getpersonneById(this.id).subscribe(data =>{
      this.personne = data;
    },error => console.log(error));
    
  }

  onSubmit(){
    this.personneservice.modifiezpersonne(this.id, this.personne).subscribe(data =>{
      this.gotoPersonnelist();
    },error => console.log(error));
  }
  gotoPersonnelist(){
    this.router.navigate(['/personnes']);
  }
  

}
