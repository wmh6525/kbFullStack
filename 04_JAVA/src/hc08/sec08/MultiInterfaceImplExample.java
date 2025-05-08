package hc08.sec08;

public class MultiInterfaceImplExample {
    public static void main(String[] args){
        RemoteControl rc = new SmartTelevision();
        // RemoteControl 인터페이스에 선언된 추상 메소드만 호출 가능하다 마찬가지로 searchable 인터페이스에 있는 메소드를 사용하고 싶다면 아래와 같이 사용 가능하다.
        rc.turnOn();
        rc.turnOff();

        Searchable searchable = new SmartTelevision();
        searchable.search("http://www.youtube.com");
    }
}
