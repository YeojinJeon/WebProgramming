

// 객체 상수
// singleton (객체 딱 하나만 생성 됨.)
var myCar = {
    model: "520d",
    speed: 60,
    color: "red",
    brake: function() {this.speed -= 10;},
    accel: function() {this.speed += 10;}
}

// 사용자 정의 객체
// 생성자! 를 이용한 객체 생성
// 함수 아님! 생성자임 ! 생성자의 이름은 항상 대문자로 시작 ! 함수와 생성자의 구별법 !
function Car(model, speed, color) {
    this.model = model;
    this.speed = speed;
    this.color = color;
    this.brake = function() {
        this.speed -= 10;
    }
    this.accel = function() {
        this.speed += 10;
    }
}