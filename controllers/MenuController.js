const inquirer = require('inquirer');

const date = new Date();

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: [
          'Get current date',
          'Add new contact',
          'Exit'
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log('Welcome to AddessBloc!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case 'Get current date':
          this.getDate();
          break;
        case 'Add new contact':
          this.addContact();
          break;
        case 'Exit':
          this.exit();
          break;
        default:
          console.log('Invalid input');
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  clear(){
    console.log('\x1Bc');
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate(){
    this.clear();
    console.log(date.toString().slice(0,15));
    this.main();
  }

  exit(){
    console.log('Thanks for using AddressBloc!');
    process.exit;
  }
}
