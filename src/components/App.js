import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {    
    handleClick() {
        this.props.addUser('Steve');
    }

    render() {
        let users = this.props.users.map(user => <li key={user}>{user}</li>);
        return (
            <div>
                <h1>React Container</h1>
                <ul>
                    {users}
                </ul>    
                <button onClick={this.handleClick.bind(this)}>Add Steve</button>            
            </div>
            
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

// Same as:

// function mapStateToProps(state) {
//     return {
//         users: state.users
//     }
// }

export default connect(mapStateToProps, actions)(App);


// OLD SCHOOL

// import { bindActionCreators } from 'redux';
// import { addUser } from '../actions';

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addUser }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);