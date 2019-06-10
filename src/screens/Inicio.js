import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../config';
let salasRef = db.ref('salas/');
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';
import CardSalaVotacao from '../components/CardSalaVotacao';
import Barra from '../components/Barra';
import BotaoAlternativa from '../components/BotaoAlternativa';
import moment from 'moment';
import BotaoDownload from '../components/BotaoDownload';
import { storageRef } from '../config';
import { FileSystem, Constants, Notifications, Permissions } from 'expo';
import { Toast, DURATION } from 'react-native-easy-toast';
// import Pdf from 'react-native-pdf';

moment.defineLocale('pt-br', {
  months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
  monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
  weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
  weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
  weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
  },
  calendar: {
    sameDay: '[Hoje às] LT',
    nextDay: '[Amanhã às] LT',
    nextWeek: 'dddd [às] LT',
    lastDay: '[Ontem às] LT',
    lastWeek: function () {
      return (this.day() === 0 || this.day() === 6) ?
        '[Último] dddd [às] LT' : // Saturday + Sunday
        '[Última] dddd [às] LT'; // Monday - Friday
    },
    sameElse: 'L'
  },
  relativeTime: {
    future: 'em %s',
    past: 'há %s',
    s: 'poucos segundos',
    ss: '%d segundos',
    m: 'um minuto',
    mm: '%d minutos',
    h: 'uma hora',
    hh: '%d horas',
    d: 'um dia',
    dd: '%d dias',
    M: 'um mês',
    MM: '%d meses',
    y: 'um ano',
    yy: '%d anos'
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: '%dº'
});

// async function getiOSNotificationPermission() {
//   const { status } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   if (status !== 'granted') {
//     await Permissions.askAsync(Permissions.NOTIFICATIONS);
//   }
// }


export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salas: []
    }
    this.listenForNotifications = this.listenForNotifications.bind(this);
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };


  componentWillMount() {
    salasRef.orderByChild("uid").on('value', snapshot => {
      let salas = snapshot.val();

      if (salas != null) {
        salas = Object.values(salas);
        this.setState(() => ({
          salas
        }))
      }
    });

    // getiOSNotificationPermission();
    // this.listenForNotifications();
  }

  getStatus = (dataFinal, dataInicial, horaFinal, horaInicial, informacaoExtra) => {
    // fazer cálculo para retornar se está em andamento, encerrada ou se vai iniciar;

    let firstMoment = moment(`${dataInicial} ${horaInicial}`, 'DD/MM/YYYY HH:mm');
    let finalMoment = moment(`${dataFinal} ${horaFinal}`, 'DD/MM/YYYY HH:mm');
    let nowMoment = moment();

    if (firstMoment.diff(nowMoment) > 0) {

      return informacaoExtra ? `Disponível ${firstMoment.fromNow()}` : 'agendada';
    }

    if (finalMoment.diff(nowMoment) >= 0) {
      return informacaoExtra ? `Encerra ${finalMoment.fromNow()}` : 'andamento';
    }
    //console.log('enc');
    return informacaoExtra ? finalMoment.format('DD/MM/YYYY HH:mm') : 'encerrada';
  }


  handleVisualizar = (item) => {
    if (item)
      this.props.navigation.navigate('Votacao', { 'sala': item });
    else
      this.props.navigation.navigate('Votacao', { 'sala': 'Não disponível' });
  }

  handleSelect = selected => {
    this.setState({ selected });
  }

  // downloadPDF = async () => {
  //   let fileName = 'ambiente-de-desenvolvimento-rn.pdf';
  //   let fileUri = FileSystem.documentDirectory + fileName;
  //   ref = await storageRef.ref('sala/pdfs/ambiente-de-desenvolvimento-rn.pdf');
  //   url = await ref.getDownloadURL();
  //   FileSystem.downloadAsync(
  //     url,
  //     fileUri
  //   ).then(({ uri }) => {
  //     console.log('Finished downloading to ', uri);

  //     const localnotification = {
  //       title: 'Download has finished',
  //       body: fileName + " has been downloaded. Tap to open file.",
  //       android: {
  //         sound: true,
  //       },
  //       ios: {
  //         sound: true,
  //       },

  //       data: {
  //         fileUri: uri
  //       },
  //     };
  //     localnotification.data.title = localnotification.title;
  //     localnotification.data.body = localnotification.body;
  //     let sendAfterFiveSeconds = Date.now();
  //     sendAfterFiveSeconds += 3000;

  //     const schedulingOptions = { time: sendAfterFiveSeconds };
  //     Notifications.scheduleLocalNotificationAsync(
  //       localnotification,
  //       schedulingOptions
  //     );
  //   })
  //     .catch(error => {
  //       console.error(error);
  //       Alert.alert(error);
  //     });
  // };

  // listenForNotifications = () => {
  //   const _this = this;

  //   Notifications.addListener(notification => {
  //     if (notification.origin === 'received') {
  //       // We could also make our own design for the toast
  //       // _this.refs.toast.show(<View><Text>hello world!</Text></View>);

  //       const toastDOM =
  //         <TouchableWithoutFeedback
  //           onPress={() => { this.openFile(notification.data.fileUri) }}
  //           style={{ padding: '10', backgroundColor: 'green' }}>
  //           <Text style={styls.toastText}>{notification.data.body}</Text>
  //         </TouchableWithoutFeedback>;

  //       _this.toast.show(toastDOM, DURATION.FOREVER);
  //     } else if (notification.origin === 'selected') {
  //       this.openFile(notification.data.fileUri);
  //     }
  //     // Expo.Notifications.setBadgeNumberAsync(number);
  //     // Notifications.setBadgeNumberAsync(10);
  //     // Notifications.presentLocalNotificationAsync(notification);
  //     // Alert.alert(notification.title, notification.body);
  //   });
  // };

  render() {
    const { salas, alternativas, selected } = this.state;
    const { height } = Dimensions.get('screen');
    const source = { uri: 'https://firebasestorage.googleapis.com/v0/b/votacaoonline-fc914.appspot.com/o/sala%2Fpdfs%2Fambiente-de-desenvolvimento-rn.pdf?alt=media&token=649574db-8837-453e-aff0-6ec8929017b7', cache: true };
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ maxHeight: height - 240, marginBottom: 5 }}>
          <View>
            {
              salas.length > 100 ?
                salas.map((item, index) =>
                  (this.getStatus(item.dataFinal,
                    item.dataInicial, item.horaFinal,
                    item.horaInicial, false)) != 'encerrada' ?
                    <CardSalaVotacao
                      key={index}
                      onPress={() => this.handleVisualizar(item)}
                      status={this.getStatus(item.dataFinal,
                        item.dataInicial, item.horaFinal,
                        item.horaInicial)}
                      mensagem={this.getStatus(item.dataFinal,
                        item.dataInicial, item.horaFinal,
                        item.horaInicial, true)}
                      titulo={item.titulo}
                    /> :
                    null
                )

                :

                

              // <Pdf source={this.downloadPDF}></Pdf>
              <BotaoDownload onPress={() => {this.props.navigation.navigate('PDF')}}></BotaoDownload>

              // <SemSalas
              //   texto="No momento você não possui salas de votação disponíveis!"
              // />
            }
          </View>

        </ScrollView>
        <BotaoNovaSala
          color='#10C500'
          endereco='Sala'
          navigation={this.props.navigation}
        />
        <Barra
          index={false}
          onPress={() => this.props.navigation.navigate('Historico')}
        />
      </View>
    );
  }
}

const styls = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1
  },
  filePreview: {
    flex: 1,
    padding: 10,
  },
  toastText: {
    color: 'white',
    padding: 5,
    justifyContent: 'flex-start',
  },
});