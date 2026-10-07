import { useEffect, useState } from "react";

const Clock = () => {
    // 시간 상태 관리
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // 시간이 1초씩 증가 구현
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
      }, 1000); // 1s = 1000ms
      console.log("렌더링...");
    }, []);
   
    

    return(
        <div>
            <h2>디지털 시계 만들기</h2>
            <h3>현재 시간 : {time}</h3>
        </div>
    )
}

export default Clock;