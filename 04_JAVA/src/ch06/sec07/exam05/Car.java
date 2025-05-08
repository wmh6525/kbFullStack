package ch06.sec07.exam05;

public class Car {
    String company = "현대자동차";
    String model;
    String color;
    int maxSpeed;

    Car(String model) {
        this(model, "은색", 250);  // 생성자 호출
    }

    Car(String model, String color) {
        this(model, color, 250);  // 생성자 호출
    }

    // 생성자 3: model, color, maxSpeed 받는 생성자
    Car(String model, String color, int maxSpeed) {
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}