import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('isloggedIn') === 'true';

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    sessionStorage.removeItem('isloggedIn');
    sessionStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
