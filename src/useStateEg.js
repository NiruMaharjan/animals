import {useState} from 'react';

function useStateEg(){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count +1);
        console.log('Button was clicked!!!')
    };

    return (
        <div>
            <button onClick={handleClick}> Add Animal  </button>
            <div> Number of animals: {count}  </div>


           
               
        </div>
    )

}

export default  useStateEg