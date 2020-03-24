import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public product: Product = {};
  private loading: any;
  private productId: string = null;
  private productSubscription: Subscription;
  public uploadPercent: Observable<number>;
  public downloadUri: Observable<string>;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private navCtrl: NavController,
    // private camera: Camera,
    // private platform: Platform,
    // private file: File,
    // private afStorage: AngularFireStorage
  ) {
    this.productId = this.activeRoute.snapshot.params['id'];

    if(this.productId) { this.loadProduct() }
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  // async openGalery() {
  //   const options: CameraOptions = {
  //     quality: 100, // Qualidade da imagem
  //     destinationType: this.camera.DestinationType.FILE_URI, // 
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, // Da onde que quer pegar o caminho
  //     correctOrientation: true // Ele corrige o formato dela
  //   };

  //   try {
  //     const fileUri: string = await this.camera.getPicture(options);

  //     let file: string;

  //     if(this.platform.is('ios')) {
  //       file = fileUri.split('/').pop();
  //     } else {
  //       file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));
  //     }

  //     const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));

  //     const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
  //     const blob: Blob = new Blob([buffer], { type: 'image/jpeg' });

  //     this.uploadPicture(blob);
  //   } catch(erro){
  //     console.error(erro);
  //   }
  // }

  // uploadPicture(blob: Blob) {
  //   const ref = this.afStorage.ref('ionic.jpeg');
  //   const task = ref.put(blob);

  //   this.uploadPercent = task.percentageChanges(); // Retorna um number no Observable

  //   task.snapshotChanges().pipe(finalize(() => this.downloadUri = ref.getDownloadURL())).subscribe();
  // }

  loadProduct() {
    this.productSubscription = this.productService.getProduct(this.productId).subscribe(dadosRetornados => {
      this.product = dadosRetornados; // Documento retornado do Firestore
    });
  }

  async saveProduct() {
    await this.presentLoading();

    this.product.userId = this.authService.getAuth().currentUser.uid;

    if(this.productId) {
        ////////
        try {
          await this.productService.updateProduct(this.productId, this.product);
          await this.loading.dismiss();

          this.navCtrl.navigateBack('/home');
        } catch(erro) {
          this.presentToast('Erro Ao tentar Salva!!');
          this.loading.dismiss();
        }
        ///////
    } else { 
        this.product.createdAt = new Date().getTime();
        //////
        try {
          await this.productService.addProduct(this.product);
          await this.loading.dismiss();

          this.navCtrl.navigateBack('/home');
        } catch(erro) {
          this.presentToast('\"Erro Ao tentar Salvar\", Usuario não tem permissão para modificar esse arquivo!!');
          this.loading.dismiss();
        }
        //////
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
