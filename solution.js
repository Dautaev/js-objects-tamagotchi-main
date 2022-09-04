
const tamogotchi = {
  name: 'egg',
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus() {
    if (this.meal < 3) {
      return console.log('я голоден');
    } else {
      return console.log('я не голоден');
    }
    if (this.energy < 3) {
      return console.log('я хочу спать');
    } else {
      return console.log('я не хочу спать');
    }
    if (this.modd < 3) {
      return console.log('мне скучно');
    } else {
      return console.log('мне весело');
    }
    if (this.meal || this.energy || this.mood === 0) {
      return console.log('умер');
    }
    console.log(`Имя: ${this.name}, Еда: ${this.meal} , Энергия: ${this.energy}, ${this.mood} `);
  },
  setName(nam) {
    this.name = nam;
  },
  eat(meal) {
    if (this.meal < 5) {
      this.meal++;
    }
    this.mood--;
  },
  sleep(energy) {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play(mood) {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
tamogotchi.play();
tamogotchi.sleep();
tamogotchi.eat();
tamogotchi.setName('тамик');
tamogotchi.getStatus();




















// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   НЕ ПОДСМАТРИВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ЗАДАНИЕ!!!!!!!
//     ***************************************************************
//     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


















const tamagotchi = {
  name: 'Toma',
  meal: 1,
  energy: 4,
  mood: 3,

  setName: function (name) {
    this.name = name;
  },

  eat: function () {
    if (this.food < 5) {
      this.food++;
    }
    this.mood--;
  },

  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.food--;
  },

  play: function () {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },

  getStatus: function () {
    if (this.food <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${this.name} умер :(`);
      return false;
    }
    const foodStatus = this.food < 3 ? 'Я голоден' : 'Я сыт';
    const energyStatus = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
    const moodStatus = this.mood < 3 ? 'Мне скучно' : 'Мне весело';

    console.log(
      `Еда: ${foodStatus} (${this.food}); Энергия: ${energyStatus}(${this.energy}); Натсроение: ${moodStatus} (${this.mood});`
    );
  },
};
