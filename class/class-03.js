function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user = new User("bomjin", "Kim");
const user2 = new User("Neo", "Park");

/** --------------------------------------------------------------------- */

class NewUser {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user3 = new NewUser("bomjin", "Kim");
const user4 = new NewUser("Neo", "Park");

/** class 문법은 자바스크립트가 기존에 가지고 있었던 프로토타입(prototype)이라는 방식을 내장해서 새로운 문법으로 동작하고 있는 것
 * NewUser 클래스라고 불릴 수도 있고, NewUser 함수라고 불릴 수도 있고, NewUser 객체라고도 불릴 수 있지만
 * 어떻게 불리는 지 중요한게 아니라 new라는 키워드와함께 마치 함수처럼 호출을 해서 반환된 인스턴스 결과를 통해서
 * 우리가 데이터를 활용할 수 있는 점이 중요
 */
