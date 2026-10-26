// 객체정의
interface Member{
    name: string,   // 필수 속성
    age? : number   // 선택속성
}

// 객체 생성
const member1: Member = {
    name : '이강',
    age : 21
}

const member2: Member = {
    name : '안세영',
   
}

// 출력
console.log(`이름: ${member1.name}, 나이 : ${member1.age}`);
console.log(`이름: ${member2.name}`);
