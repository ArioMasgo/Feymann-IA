import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [MatIconModule, MatMenuModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeComponent {
  private _router = inject(Router);

  private authservice = inject(AuthService);

  // @ViewChild(MatMenuTrigger) matMenu: MatMenuTrigger | undefined;
  @ViewChild('menu') matMenu: MatMenuPanel<any> | null = null;

  ngAfterViewInit() {
    // Lógica para inicializar o manipular el menú aquí
    console.log('matMenu:', this.matMenu);
  }

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/');
    } catch (error) {
      console.log(error);
    }
  }
}
