//package ch06;
//
//
//public class CallByTest {
//    int i;
//
//    public CallByTest(int i) {
//        this.i = i;
//    }
//
//    void m(int i){
//        i=99;
//    }
//    /**
//     * 매개 변수 arr은 배열로 참조형이다. 참조형은 heap 메모리 참조값을 갖는다.
//     * @param arr
//     */
//    void m(int[] arr){
//        arr[0] = 99;
//    }
//    public static void main(String[] args) {
//        int i = 7;
//        CallByTest test = new CallByTest();
//        test.m(i);
//        System.out.println(i);//7
//        int[] arr= {7,8,9};
//        test.m(arr);
//        System.out.println(arr[0]);
//    }
//}
