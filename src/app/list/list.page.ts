import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public livros: any = []

  livroList = []
  livroName;

  constructor(private storage: Storage) {
    this.getLivro();
  }

  getLivro(){
    this.storage.get('livro').then(data => {
      if (data){
        this.livroList = data;
      }
      console.log('GetLivro', this.livroList);
    }).catch(error =>{
      console.error(error);
    });
  }
  setLivro(){
    this.storage.set('livro', this.livroList)
  }
    addLivro(livroName){
      console.log('enviar')
      if (this.livroName.length > 0){
        let livro = this.livroName;
        this.livroList.push(livro);
        this.livroName = "";
        this.setLivro()
        
      }
  }
  deleteLivro(index){
    this.livroList.splice(index, 1);
    this.setLivro();
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
