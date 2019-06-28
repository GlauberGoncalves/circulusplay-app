import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Credenciais } from '../models/credenciais.model';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth:AuthService,
    private router: Router,
    private navigate:NavController) { }

  ngOnInit() {    

  }

  fazLogin(email, senha) {
    
    let credenciais = {email, senha}

    this.auth.authenticate(credenciais)
      .subscribe(response => {
        console.log("logou")
        console.log(response)
        let body = JSON.parse(response.body);        
        this.auth.sucessoLogin(body["token"])
          .then(() => {
            console.log("Logado");
            this.navigate.navigateForward(['home'])
          });
      },
      error => {
        console.log("Deu erro");
      });    
  }

}
