import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    PersonProvider
  ]
})
export class HomePage {

  public lista_pessoas = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private personProvider: PersonProvider
  ) {
  }

  ionViewDidEnter() {
    this.carregarPerson();
  }



  carregarPerson() {
    this.lista_pessoas = [];

    this.personProvider.getLatestPersons().subscribe(
      data => {
        try {
          const response = (data as any);
          this.lista_pessoas.push(JSON.parse(response._body));
        } catch (erro) {
          console.log('deu erro', erro);
        }
      },
      error => {
        console.log(error);

      })
  }




  abrirDetalhes(pessoa) {

    this.navCtrl.push(
      DetailsPage,
      {
        name: pessoa.name,
        surname: pessoa.surname,
        gender: pessoa.gender,
        region: pessoa.region,
        age: pessoa.age,
        email: pessoa.email,
        photo: pessoa.photo


      }



    );
  }


}
