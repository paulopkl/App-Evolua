import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public products = new Array<Product>();
  private productsSubcription: Subscription;
  private loading: any;

  constructor( 
    private productsService: ProductService, 
    private authService: AuthService, 
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController,
    ) { 
    this.productsSubcription = this.productsService.getProducts().subscribe(dados => {
      this.products = dados;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.productsSubcription.unsubscribe();
  }

  async logout() {

      try {
        await this.authService.logout()
      } catch(erro) {
        this.presentToast('\"Erro ao tentar Sair\", Contate ao desenvolvedor, resolveremos assim que podermos.!');
      }

  }

  async deleteProduct(id: string){

      try {
        await this.productsService.deleteProduct(id);
      } catch(erro) {
        this.presentToast('\"Erro ao tentar Excluir\", Usuario não tem permissão para apagar esse dado.!');
      }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) { // O parâmetro tem que ser uma string
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      color: 'danger',
      keyboardClose: true,
      translucent: true
    });
    toast.present(); // Esse atributo mostra o this.toastCtrl.create({})
  }

}
