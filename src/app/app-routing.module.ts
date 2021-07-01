import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'genre', loadChildren: () => import('./component/genre/genre.module').then(m => m.GenreModule) }, { path: 'books', loadChildren: () => import('./component/books/books.module').then(m => m.BooksModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
