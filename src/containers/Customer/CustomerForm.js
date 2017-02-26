import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../middleware/customer/actions/creators';
import HobbyList from '../../components/Customer/HobbyList';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddHobby = this.handleAddHobby.bind(this);
  }

  handleSubmit = () => {
    this.props.actions.requestAddCustomer({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
    });
  }

  handleAddHobby = () => {
    if (!this.hobby.value) {
      return;
    }
    this.props.actions.requestAddHobby(this.hobby.value);
    this.hobby.value = null;
  }

  render() {
    const { customer } = this.props;
    const fullName = customer.firstName + ' ' +  customer.lastName;
    let statusText = '';
    if (customer.isAdding) {
      statusText = 'Loading ...';
    } else if (customer.isAdded) {
      statusText = 'Done!';
    }
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-body">
              { customer.error ?
              <div className="errors alert alert-danger">
                <div>{customer.error}</div>
              </div> :
              null
              }
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>First name</label>
                    <div>
                      <input type="text" className="form-control input-md" ref={ fn => {this.firstName = fn} } />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Last name</label>
                    <div>
                      <input type="text" className="form-control input-md" ref={ ln => {this.lastName = ln} }/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Add your hubbies (one at a time)</label>
                    <div>
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control input-md" ref={ h => {this.hobby = h} }/>
                        <a className="btn btn-primary input-group-addon" onClick={ this.handleAddHobby }><span>+</span></a>
                      </div>
                      <HobbyList hobbies={customer.hobbies}/>
                    </div>                          
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-lg btn-block btn-success start"
                    onClick={ this.handleSubmit }
                    >
                    Submit
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  { statusText }
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <div style={{ marginTop: 10 }}>
                      <textarea
                        className="form-control input-md"
                        value={ fullName }
                      />                        
                    </div>
                  </div>
                </div>
              </div>                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CustomerForm.propTypes = {
  customer: React.PropTypes.object
};

const mapStateToProps = (state, props) =>
({
  customer: state.customer
});

const mapDispatchToProps = (dispatch) =>
({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
