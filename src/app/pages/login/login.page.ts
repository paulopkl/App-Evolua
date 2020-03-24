import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  public wavesPosition: number = 0;
  public wavesDiference: number = 100;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  @Input() public nome: string;
  

  constructor(
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService  
  ) {  }

  ngOnInit() {  }

  segmentChanged(event: any){ // Slider
    if (event.detail.value === 'login'){
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDiference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDiference;
    }
  }

  async login() {
    await this.presentLoading();

    try { // Tentar registrar o Usuario
        await this.authService.login(this.userLogin);

    } catch(error) { // Se der erro dá um console.log do erro      
      let message: string;
      switch(error.code){ // O Atributo code dentro do objeto {error}

        case "auth/argument-error": {
          message = "\"Campo de E-mail ou Senha Vazio(s)\", Digite um E-mail ou Senha válidos ;)";
          break;
        }

        case "auth/invalid-email": {
          message = "\"Campo de E-mail invalido\", Digite um E-mail corretamente ;)";
          break;
        }

        case "auth/user-not-found": {
          message = "\"Erro\", Este Email não está cadastrado!";
          break;
        }

         case "auth/wrong-password": {
          message = "\"Senha Inválida\", Esta Senha não Corresponde ao E-mail cadastrado!";
          break;
        }

         default: {
          message = "\"Erro Inesperado\", Favor contatar ao suporte e dar seu FeedBack";
        }

      }
        this.presentToast(message); // O bloco apresentara o que está contido na variavel message
    } finally { // E finalmente esconde o loading que estava mostrando
        this.loading.dismiss(); // Depois some o loading
    }
  }

  async register() {
    await this.presentLoading();

    try { // Tentar registrar o Usuario
        await this.authService.register(this.userRegister);
        // const usuario = await this.authService.register(this.userRegister);
        // usuario.user.uid;
        // Acima mostrar como pegar o uid do usuario x
    } catch(error) { // Se der erro dá um console.log do erro
      
        let message: string;
        switch(error.code){ // O Atributo code dentro do objeto {error}

          case "auth/weak-password": {
            message = '\"Senha Fraca\", A senha deve conter no mínimo 6 caractéres';
            break;
          }

          case "auth/argument-error": {
            message = "\"Campo de E-mail ou Senha Vazio(s)\", Digite um E-mail ou Senha válidos ;)";
            break;
          }

          case "auth/invalid-email": {
            message = "\"Campo de E-mail invalido\", Digite um E-mail corretamente ;)";
            break;
          }

          case "auth/email-already-in-use": {
            message = "Este E-mail já está cadastrado em uma conta, utilize outro E-mail ou faça Login";
          }

          default: {
             message = "\"Erro Inesperado\", Favor contatar ao suporte e dar seu FeedBack";
          }

        }
        this.presentToast(message); // O bloco apresentara o que está contido na variavel message

    } finally { // E finalmente esconde o loading que estava mostrando
        this.loading.dismiss(); // Depois some o loading
        console.log(this.nome);
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor aguarde...' });
         // , duration: 3000 });
    return this.loading.present();
  }

  async presentToast(message: string) { // O parâmetro tem que ser uma string
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      color: 'danger',
      // keyboardClose: true,
      translucent: true
    });
    toast.present(); // Esse atributo mostra o this.toastCtrl.create({})
  }

}
