import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule} from '@angular/material/icon'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatButtonModule} from '@angular/material/button'
import { AuthService } from '../auth/auth.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatButtonModule
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit, OnDestroy{
  isLoggedIn = false;
  destroySubject = new Subject();
  constructor(private authService: AuthService, private router: Router){ 
    authService.authStatus.pipe(takeUntil(this.destroySubject))
    .subscribe(result => {
      this.isLoggedIn = result;
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    this.destroySubject.next(true);
    this.destroySubject.complete();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate([''])
  }
}


