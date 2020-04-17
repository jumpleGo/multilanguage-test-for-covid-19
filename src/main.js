import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VueGeolocation from 'vue-browser-geolocation';
import Notifications from 'vue-notification'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);

Vue.config.productionTip = false
import VueI18n from 'vue-i18n'
 
Vue.use(VueI18n)



Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(VueGeolocation)
Vue.use(Vuelidate)


const messages = {
 
  RU : {
    pay : 'Оплатить 30 RUB',
    result : 'Чтобы пройти тест проведите оплату',
    contacts : 'Kонтакты',
    policy : 'Политика конфидициальности',
    license : 'Информация на данном интернет-сайте носит исключительно ознакомительный характер и ни при каких условиях не является публичной офертой. Результаты нашего теста не призывают вас к каким-либо действиям либо бездействиям.',
    ok : 'понятно',
    start : 'начать',
    text: 'Узнайте схожи ли ваши симптомы с симптомами <span class="covid">covid-19</span>.',
    select: 'Язык',
    button: 'Пройти тест',
    button_next: 'Далее',
    question_body: {
      text : 'Выберите ваше телосложение',
    },
    question_1: {
      text : 'Есть ли у вас утомляемость в 1 половине дня?',
      answer_1: 'Нет',
      answer_2: 'Иногда',
      answer_3: 'Часто',
    },
    question_2: {
      text : 'Задержите дыхание на 20 секунд. Что вы чувствуете при выдохе?',
      second: 'cекунд',
      answer_1: 'Все как обычно',
      answer_2: 'Боль при выдохе',
      answer_3: 'Кашель при  выдохе',
    },
    question_3: {
      text : 'Есть ли у вас боль в мышцах (в пояснице, плечах, конечностях)?',
      answer_1: 'Нет',
      answer_2: 'Немного',
      answer_3: 'Да',
    },
    question_4: {
      text : 'Замечали ли вы избыточную потливость?',
      answer_1: 'Нет',
      answer_2: 'Да',
    },
    question_5: {
      text : 'Была ли у вас повышенная температура в последние 3 дня?',
      answer_1: 'Нет',
      answer_2: 'Да',
    },
    question_6: {
      text : 'Сделайте 10 приседаний. Сколько длится отдышка?',
      answer_1: 'Менее 30 секунд',
      answer_2: 'Менее минуты',
      answer_3: 'Более минуты',
    },
    question_7: {
      text : 'Как часто вас беспокоят головные боли?',
      answer_1: 'Не беспокоят',
      answer_2: '1 раз в день',
      answer_3: ' Более 2 раз в день',
    },
    question_8: {
      text : 'Eсть ли у вас диаррея или боли в животе? ',
      answer_1: ' Нет',
      answer_2: 'Иногда',
      answer_3: 'Часто',
    },
    final : {
      text : 'Ваши симптомы совпадпют на:',
      friends : 'Поделись ссылкой с друзьями'
    },
    button_end : 'На главную'
  
  },
  IT : {
    result : 'Per superare il test,effettuare il pagamento',
    pay : 'Pagare 1 USD',
    contacts : 'contatti',
    policy : 'Politica sulla privacy',
    license : "Le informazioni contenute in questo sito internet sono solo di carattere informativo e non costituiscono in nessun caso un'offerta pubblica. I risultati del nostro test non ti incoraggia ad alcuna azione o inattività.",
    ok  : 'è chiaro',
    start : 'linea di partenza',
    text: 'Scopri se sei malato<span class="covid">covid-19</span> secondo i tuoi sintomi',
    select: 'Lingua',
    button: 'Fai il test',
    button_next: 'Quindi',
    question_1: {
      text : 'Hai la stanchezza in 1: 00',
      answer_1: 'No',
      answer_2: 'A volte',
      answer_3: 'Spesso',
    },
    question_2: {
      text : 'Trattenere il respiro per 20 secondi che cosa si sente durante l`espirazione?',
      second: 'seconda',
      answer_1: 'Tutto come al solito',
      answer_2: 'Dolore durante l`espirazione',
      answer_3: 'Tosse durante l`espirazione',
    },
    question_3: {
      text : 'Hai dolori muscolari (nella parte bassa della schiena, spalle, arti)?',
      answer_1: 'No',
      answer_2: 'Un poco',
      answer_3: 'Sì',
    },
    question_4: {
      text : 'Hai notato sudorazione eccessiva?',
      answer_1: 'No',
      answer_2: 'Sì',
    },
    question_5: {
      text : 'Ha avuto la febbre negli ultimi 3 giorni?',
      answer_1: 'No',
      answer_2: 'Sì',
    },
    question_6: {
      text : 'Per un minuto, fai la ginnastica Quanto dura la mancanza di respiro?',
      answer_1: 'Meno di 30 secondi',
      answer_2: 'Meno di un minuto',
      answer_3: 'Più di un minuto',
    },
    question_7: {
      text : 'Quanto spesso sei preoccupato per il mal di testa?',
      answer_1: 'Non disturbare',
      answer_2: '1 volta al giorno',
      answer_3: ' Più di 2 volte al giorno',
    },
    question_8: {
      text : 'Hai diarrea o dolore addominale? ',
      answer_1: ' No',
      answer_2: 'A volte',
      answer_3: 'Spesso',
    },
    final : {
      text : 'La probabilità della tua malattia',
      friends : 'Condividi il link con i tuoi amici'
    },


    question_body: {
      text : 'Scegli il tuo fisico',
    },
    button_end : 'A casa'
   

  },
  EN : {
    result : 'To pass the test,make a payment',
    pay : 'To pay 1 USD',
    contacts : 'contacts',
    policy : 'Privacy policy',
    license : 'The information on this website is for informational purposes only and is not a public offer under any circumstances. The results of our test do not call you to any actions or omissions.',
    ok : 'ok',
    start : 'start',
    text: 'Find out if you are ill <span class="covid">covid-19</span>according to your symptoms',
    select: 'Lang',
    button: 'Take the test',
    button_next: 'Next',
    question_1: {
      text : 'Do you have fatigue in 1 half of the day',
      answer_1: 'No',
      answer_2: 'Sometimes',
      answer_3: 'Often',
    },
    question_2: {
      text : 'Hold your breath for 20 seconds What do you feel when you exhale?',
      second: 'second',
      answer_1: 'Everything as usual',
      answer_2: 'Pain when exhaling',
      answer_3: 'A cough during exhalation',
    },
    question_3: {
      text : 'Do you have muscle pain (in the lower back, shoulders, or extremities)?',
      answer_1: 'No',
      answer_2: 'A little',
      answer_3: 'Yes',
    },
    question_4: {
      text : 'Have you noticed excessive sweating?',
      answer_1: 'No',
      answer_2: 'Yes',
    },
    question_5: {
      text : 'Have you had a fever in the last 3 days?',
      answer_1: 'No',
      answer_2: 'Yes',
    },
    question_6: {
      text : 'Sit down 10 times, how long does the shortness of breath last?',
      answer_1: 'Less than 30 seconds',
      answer_2: 'Less than a minute',
      answer_3: 'Over a minute',
    },
    question_7: {
      text : 'How often do you get headaches?',
      answer_1: 'Not disturb',
      answer_2: '1 time per day',
      answer_3: ' More than 2 times a day',
    },
    question_8: {
      text : 'Do you have diarrhea or abdominal pain? ',
      answer_1: ' No',
      answer_2: 'Sometimes',
      answer_3: 'Often',
    },
    final : {
      text : 'The likelihood of your illness',
      friends : 'Share the link with your friends'
    },


    question_body: {
      text : 'Choose your physique',
    },
    button_end : 'To home'
   

  },
  ES : {
    pay : 'Pagar 1 Dollar',
    result : 'Para pasar la prueba,realice el pago',
    contacts : 'contactos',
    policy : 'Política de privacidad',
    license  : 'La información contenida en este sitio de Internet es únicamente de carácter informativo y no constituye en ningún caso una oferta pública. Los resultados de nuestra prueba no le insta a ninguna acción o inacción.',
    ok : 'es comprensible',
    start : 'comienzo',
    text: 'Averigüe si está enfermo <span class="covid">covid-19</span>por sus síntomas',
    select: 'Idioma',
    button: 'Pasar la prueba',
    button_next: 'A continuación',
    question_1: {
      text : '¿Tiene fatiga en 1 mitad del día',
      answer_1: 'No hay',
      answer_2: 'A veces',
      answer_3: 'A menudo',
    },
    question_2: {
      text : 'Aguanta la respiración durante 20 segundos ¿Qué sientes al exhalar?',
      second: 'segunda',
      answer_1: 'Todo como de costumbre',
      answer_2: 'Dolor al exhalar',
      answer_3: 'Tos al exhalar',
    },
    question_3: {
      text : '¿Tiene dolor en los músculos (en la parte inferior de la espalda, los hombros, las extremidades)?',
      answer_1: 'No hay',
      answer_2: 'Un poco',
      answer_3: 'Sí',
    },
    question_4: {
      text : '¿Has notado un exceso de sudoración?',
      answer_1: 'No hay',
      answer_2: 'Sí',
    },
    question_5: {
      text : '¿Ha tenido fiebre en los últimos 3 días?',
      answer_1: 'No hay',
      answer_2: 'Sí',
    },
    question_6: {
      text : 'Durante un minuto hacer gimnasia cuánto dura la respiración?',
      answer_1: 'Menos de 30 segundos',
      answer_2: 'Menos de un minuto',
      answer_3: 'Más de un minuto',
    },
    question_7: {
      text : '¿Con qué frecuencia te molestan los dolores de cabeza?',
      answer_1: 'Dejar',
      answer_2: '1 vez al día',
      answer_3: ' Más de 2 veces al día',
    },
    question_8: {
      text : '¿Tiene diarrea o dolor abdominal?',
      answer_1: ' No hay',
      answer_2: 'A veces',
      answer_3: 'A menudo',
    },
    final : {
      text : 'Probabilidad de su enfermedad',
      friends : 'Comparte el enlace con tus amigos'
    },
    button_end : 'A la principal',


    question_body: {
      text : 'Elige tu físico',
    },
   

  },
  CN : {
    result : '您的答案已保存，以找出您需要支付的結果',
    pay : '支付1美元',
    contacts : '联系我们',
    policy : '隐私权政策',
    license : '本网站上的信息仅供参考，在任何情况下都不是公开提供。 我们的测试结果不打电话给你的任何行为或遗漏。本网站上的信息仅供参考，在任何情况下都不是公开提供。 我们的测试结果不打电话给你的任何行为或遗漏。',
    ok : '原來如此',
    start : '开始吧',
    text: '看看你是否生病了 <span class="covid">covid-19</span> 根据你的症状',
    select: '语言',
    button: '通过测试',
    button_next: '进一步的',
    question_1: {
      text : '你有疲劳在1半天half',
      answer_1: '非也。',
      answer_2: '有时候',
      answer_3: '经常',
    },
    question_2: {
      text : '屏住呼吸20秒呼气时你有什么感觉？',
      second: '第二',
      answer_1: '一切照常',
      answer_2: '呼气时疼痛',
      answer_3: '呼气时咳嗽'
    },
    question_3: {
      text : '你有肌肉疼痛（在腰部，肩部或四肢）？',
      answer_1: '非也。',
      answer_2: '一点点',
      answer_3: '是',
    },
    question_4: {
      text : '你有没有注意到过度出汗？',
      answer_1: '非也。',
      answer_2: '是',
    },
    question_5: {
      text : '你在过去的3天发烧了fever？',
      answer_1: '非也。',
      answer_2: '是',
    },
    question_6: {
      text : '在一分钟内做体操呼吸急促持续多久？',
      answer_1: '少于30秒',
      answer_2: '不到一分钟',
      answer_3: '超过一分钟',
    },
    question_7: {
      text : '你多久会头痛？',
      answer_1: '不打扰',
      answer_2: '每天1次',
      answer_3: ' 每天2次以上',
    },
    question_8: {
      text : '你有腹泻或腹痛?？ ',
      answer_1: ' 非也。',
      answer_2: '有时候',
      answer_3: '经常',
    },
    final : {
      text : '你患病的可能性',
      friends : '与朋友分享链接'
    },

    question_body: {
      text : '选择你的体质',
    },
    button_end : '在主'

  }
}


export const i18n = new VueI18n({
  locale: '', // set locale
  messages, // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
