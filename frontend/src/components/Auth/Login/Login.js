import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../../actions/authActions';
import TextFieldGroup from '../../Common/TextFieldGroup';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);

    axios.post('/api/users/login', userData)
        .then(res => console.log(res.data))
        .catch(err => this.setState({errors: err.response.data}));
  }

  render() {

    const { errors } = this.state;

    return (
      <div className="row login-card">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <form onSubmit={this.onSubmit}>
              <div className="card-content white-text">
                <h2 className="center-align">Log In</h2>

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
        
              </div>
              <div className="card-action">
                <button className="waves-effect waves-light btn" type="submit">Login</button>
                <a href="" className="forgot-password-link">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);