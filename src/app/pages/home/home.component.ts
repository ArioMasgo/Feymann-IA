import { Component, inject, ViewChild, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuPanel } from '@angular/material/menu';
import { Book, CATEGORIES } from 'src/app/core/utilies/constans';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatIconModule, MatMenuModule, NgFor, NgIf],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeComponent implements OnInit{
  private _router = inject(Router);
  public categories = CATEGORIES;
  selectedCategory:string = '1';
  public books:Book[] = [];
  public isSelectCategory:boolean = false;


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

  public changeCategory(index:string) {
    this.selectedCategory = index;
    this.books = this.categories.find(category => category.id === index)?.books || [];
    this.isSelectCategory = true;
  }
  ngOnInit() {
    this.showAllBooks();
  }
  public showAllBooks() {
    this.selectedCategory = 'all';
    this.books = this.categories.flatMap(category => category.books.slice(0, 2));
    this.isSelectCategory = true;
  }

  public closeCategoryBooks() {
    this.isSelectCategory = false;
    this.books = [];
  }
}
