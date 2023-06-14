import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Press plano', body: 'Este ejercicio de pecho sera el primero que tengamos que hacer con una barra olimpica y el peso que podamos manejar.' },
    { id: 2, title: 'Press inclinado', body: 'Este ejercicio sera tambien de la misma forma pero ahora un poco inclinado el asiento pero usando mancuernas.' },
    { id: 3, title: 'Extensiones de pecho', body: 'Este ejercicio servira para que nuestro pecho se parta en 2 al usar la maquina y juntar las 2 palancas a la altura del pectoral.' }
  ];

  selectedPost: any;

  onSelectPost(post: any) {
    this.selectedPost = post;
  }
}
