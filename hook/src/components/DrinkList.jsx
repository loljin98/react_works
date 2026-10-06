// Drinks의 하위 컴퐅넌트 정의
const DrinkList = ({drinklist}) => {
    console.log(drinklist);
    
    
    return(
        <div>
          
            <ul>
                    {drinklist.map((drink, index) => (
                        <li key={index}> {drink} </li>
                    ))}
                </ul>
        </div>
    )
}

export default DrinkList;