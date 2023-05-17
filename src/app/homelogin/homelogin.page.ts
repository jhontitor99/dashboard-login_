import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.page.html',
  styleUrls: ['./homelogin.page.scss'],
})
export class HomeloginPage implements OnInit {
  alumnos: any = [];

  permission: boolean

  alumnobuscado: any
  code: any;

  constructor(private router: Router,private userService: UserService,private http: HttpClient,private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.permission = true;
    console.log("hola")
    this.getAlumnos().subscribe(res =>{
      console.log("Res",res) // devuelve resp en consola
      this.alumnos = res;
      this.alumnobuscado = this.alumnos;
  })
  
}
  getAlumnos() {
    return this.http
    .get('assets/files/alumnos.json')
    .pipe(
      map((resp: any) => {
        return resp.data
      })
    )
}
buscarAlumno(event) {
  const texto = event.target.value
  this.alumnobuscado = this.alumnos
  if(texto && texto.trim() != '') {
    this.alumnobuscado = this.alumnos.filter((alumnos: any)=>{
      return(alumnos.name.toLowerCase().indexOf(texto.toLowerCase()) > -1)
    })
  }
}

onClick(){
  this.userService.logout()
  .then(()=>{this.router.navigate(['/home'])})
  .catch(error => console.log(error));
}

scan(){

  this.barcodeScanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);
    //this.alumnos.json.this.code=this.code;
   }).catch(err => {
       console.log('Error', err);
   });

}

}