function App(){
    let message = 'Welcome to my First Projecct..!!'
    if(Math.random() > 0.5){
        message = 'Welcome to my First Projecct..!!  Value is > 0.5';
    }
    const minValue = 5;
    const name = 'Vijay';
    const message1 = 'Enter Age';


    return (
        <div>
            <h1>My Name is {name}</h1>
            <h1>{message} <br></br>{new Date().toLocaleTimeString()}</h1>
        
            <input type="number" 
                min={minValue} 
                max={10}
                list={[1,2,3]}
                style={{border: '1px solid red'}}    
                alt={message1}
                maxLength={10}
            />
            <br/>
            <br/>
            <textarea
                readOnly
                maxLength={3}
                spellCheck
                style={{backgroundColor: 'gray'}}
            />
 
        </div>

        

    );
        
};

export default App;