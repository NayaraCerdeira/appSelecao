import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  citacaoList = []
  livroList = []
  

  citacaoName; livroName; 

  constructor(private storage: Storage) {
    this.getCitacao();
    this.getLivro();

   }

   getCitacao(){
     this.storage.get('citacao').then(data => {
       if (data){
         this.citacaoList = data;
       }
       console.log('GetCitacao', this.citacaoList);
     }).catch(error =>{
       console.error(error);
     });
   }
   setCitacao(){
     this.storage.set('citacao', this.citacaoList)
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
  

 addCitacao(citacaoName){
    console.log('Adiciona', this.citacaoList)
    if (this.citacaoName.length > 0){
      let citacao = this.citacaoName;
      this.citacaoList.push(citacao);
      this.citacaoName = "";
      this.setCitacao();
    }
  }
  deleteCitacao(index){
    this.citacaoList.splice(index, 1);
    this.setCitacao();
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

  ngOnInit() {
  }

}
