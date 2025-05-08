package ch12.sec05;

public class StringBuilderExample {
    public static void main(String[] args) {
        String data = new StringBuilder()
                .append("DEF")
                .insert(0, "ABC")
                .delete(3, 4)
                .toString();
        System.out.println(data);
    }
}
// ABEF 출력 // 3,4 배열 삭제가 아니라 3부터 4전 까지 즉 3만 삭제

// ABCEF