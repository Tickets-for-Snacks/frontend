import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
    //  alert('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/home']);
    }
  }



}
