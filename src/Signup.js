import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            Mobile: "",
            Email: "",
            gender:"",
            address:"",
            Password: "",
            
          
        };
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    
        

    

    render() {
       
        return (
            <div>
                <h1 align="center" style={{color : "#996600"}}>Signup</h1>
                <div >
                    <form  align="center">
                       
                        <div >
                        Name:<input type="text"  Name="username"  onChange={this.onChange.bind(this)} ></input><br />
                        Mobile No :<input type="number" Name="Mobile" onChange={this.onChange.bind(this)}></input><br />
                        Email:<input type="text"  Name="Email" onChange={this.onChange.bind(this)}></input><br />
                        Gender:<input type="text"  Name="gender" onChange={this.onChange.bind(this)}></input><br />
                        Address:<input type="text"   Name="address" onChange={this.onChange.bind(this)}></input><br />
                        Password:<input type="text" Name="Password"  onChange={this.onChange.bind(this)}></input><br />
                       
                        </div>
                        <input type="submit" value="submit"></input>
                    </form>
                    </div>
            </div>
        );
    }
}

export default Signup;