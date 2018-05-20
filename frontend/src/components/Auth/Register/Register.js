import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
import TextFieldGroup from '../../Common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render() {

    const {errors} = this.state;

    const {user} = this.props.auth;

    return (
      <div className="row login-card">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <form onSubmit={this.onSubmit} noValidate>
              <div className="card-content white-text">
                <h2 className="center-align">Register</h2>
         
            {user ? user.name : null}
            <div className="row">
              <div className='input-field col s6'>
                <input className={classnames('',{'invalid': errors.first_name})} id="first_name" name='first_name' type="text" value={this.state.first_name} 
                  onChange = {this.onChange} />
                <label htmlFor="first_name">First Name</label>
                {errors.first_name && (<div>{errors.first_name}</div>)}
              </div>
      
              <div className='input-field col s6'>
                <input className={classnames('',{'invalid': errors.last_name})}id="last_name" name='last_name' type="text" value={this.state.last_name}
                  onChange = {this.onChange}/>
                <label htmlFor="last_name">Last Name</label>
                {errors.last_name && (<div>{errors.last_name}</div>)}
              </div>
            </div>

            <TextFieldGroup className={classnames('',{'invalid': errors.email})} 
                            name='email' 
                            type="email" 
                            value={this.state.email}
                            onChange = {this.onChange}
                            error={errors.email}
                            label='Email'
                            />
            <TextFieldGroup className={classnames('',{'invalid': errors.password})} 
                            name='password' 
                            type="password" 
                            value={this.state.password}
                            onChange = {this.onChange}
                            error={errors.password}
                            label='Password'
                            />

            <TextFieldGroup className={classnames('',{'invalid': errors.password})} 
                            name='password2' 
                            type="password" 
                            value={this.state.password2}
                            onChange = {this.onChange}
                            error={errors.password2}
                            label='Confirm Password'
                            />

          </div>
            <div className="actions">
              <button className='col s12 btn btn-large waves-effect'>Register</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));