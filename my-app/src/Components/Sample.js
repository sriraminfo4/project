import react ,{Component} from  'react';
import axios from'axios';

class Sample extends Component{
    constructor(){
        super();
    }

componentDidMount(){
axios.post("https://jsonplaceholder.typicode.com/posts",{name:"Sriram",Email:"thisissriram",phone:99999,salary:1234})
.then(response => {
    console.log(response)
})
.catch(error =>
    {console.log(error)
})
}

render (){
        return<>
              <h1>trying to get data</h1>
              </>
    }
}

export default Sample;