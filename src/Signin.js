import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
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
            <div >

                <h1 align="center" style={{ color: "#996600" }} >Signin</h1>
                <div >
                    <form align="center" >

                        Email:<input type="text"  name="Email"  onChange={this.onChange.bind(this)}></input><br />
                            Password:<input type="text"  name="Password"  onChange={this.onChange.bind(this)} ></input><br />
                        <input type="submit" className="btn" value="Submit"></input>

                    </form>
                </div>
                  
              
            </div>

        );
    }
}

export default Signin;