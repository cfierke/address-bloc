const ContactController = require('../controllers/ContactController');

const sequelize = require('../db/models/index.js').sequelize;

describe('ContactController', () => {

  beforeEach((done) => {
    this.book = new ContactController();

    sequelize.sync({force: true}).then((res) => {
      done();
    })
    .catch((err) => {
      done();
    });
  });

  describe('#addContact()', () => {
    it('should add a single contact into the book', (done) => {
      this.book.addContact('Alice', '001-101-1010', 'none@all.net')
      .then((contact) => {
        expect(contact.name).toBe('Alice');
        expect(contact.phone).toBe('001-101-1010');
        expect(contact.email).toBe('none@all.net');
        done();
      })
      .catch((err) => {
        done();
      })
    });
  });

  it('should be defined', () => {
    expect(ContactController).toBeDefined();
  });
});
