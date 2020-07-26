import React, {Component} from 'react';

import './App.css';
import InputField from './components/InputField/inputcomp';
import SelectField from './components/InputField/selectcomp';
import Button from './components/Button/buttoncomp';
import Accordion from './components/Accordion/accordioncomp';
import {Validators} from "./utilities/validator";

export default class App extends Component {

  state = {
    text: '',
    number: '',
    email: '',
    cvc: '',
    date: '',
    payment: ''
  }

  // Handles the state of Input Fields
  handleChange = (key) => (value) => {
    this.setState({[key]: value});
  }

  // Handles the state of Select Fields
  handleSelectField = (payment) => {
    this.setState({payment});
  };

  // handle event when button is clicked
  handleClick = (event) => {
    event.preventDefault();
    alert('Button clicked');
  }

  render() {
    const {text, number, email, cvc, date, payment} = this.state;
    return (
      <div className="container">
        <h2>Input Fields</h2>
        <div className='flex-row'>
          <SelectField 
            label = 'Payment Method'
            data = {[
              {value: 1, label: 'Credit Card'},
              {value: 2, label: 'Cash on Delivery'},
              {value: 3, label: 'Cash'},
              {value: 4, label: 'Debit Card'}
            ]}
            value={payment}
            placeholder="Payment Type"
            onChange={this.handleSelectField}
          />

          <InputField 
            value={text} 
            placeholder='Enter Name'
            type='text' 
            label='Name on Card'
            validators={[
              {check: Validators.required, message: 'This field is required'}
            ]} 
            onChange={this.handleChange('text')} />

          <InputField 
            value={number} 
            placeholder='1234 5678 9012 3456'
            type='number' 
            label='Card Number'
            validators={[
              {check: Validators.number, message: 'Number required'}
            ]} 
            onChange={this.handleChange('number')} />

          <InputField 
            value={email} 
            placeholder='Email'
            type='email' 
            label='Email'
            validators={[
              {check: Validators.email, message: 'Email is not valid'}
            ]} 
            onChange={this.handleChange('email')} />

          <InputField 
            value={date} 
            placeholder='MM / YY'
            type='text' 
            label='Card Expiry'
            styleClass='flex-col-6'
            validators={[
              {check: Validators.required, message: 'This field is required'}
            ]} 
            onChange={this.handleChange('date')} />

          <InputField 
            value={cvc} 
            placeholder='***'
            type='password' 
            label='CVC'
            styleClass='flex-col-6'
            validators={[
              {check: Validators.required, message: 'This field is required'}
            ]} 
            onChange={this.handleChange('cvc')} />

        </div>

        <div>
          <h2>Primary Buttons</h2>
          <Button 
            onClick={this.handleClick} 
            value='.primary-button .hover-blue'
            styleClass='primary-button hover-blue' 
          />
          <Button 
            onClick={this.handleClick} 
            value='.primary-button .hover-red'
            styleClass='primary-button hover-red' 
          />
          <Button 
            onClick={this.handleClick} 
            value='.blue-button .hover-white'
            styleClass='blue-button hover-white' 
          />
          <Button 
            onClick={this.handleClick} 
            value='.red-button'
            styleClass='red-button' 
          />
          <br /><br />
          <Button 
            onClick={this.handleClick} 
            value='cancel'
            width='width-200'
            styleClass='primary-button' 
          />
          <Button 
            onClick={this.handleClick} 
            value='Save Changes'
            width='width-200'
            styleClass='blue-button' 
          />
        </div>
        <div>
          <h2>Accordions</h2>
          <Accordion 
            title='Click me'
            sectionContent='
            <p>asdasd</p>
            <p>asdasd</p>
            <p>asdasd</p>
            <p>asdasd</p>
            <p>asdasd</p>
            '
            iconHeight="20"
            iconWidth="20"
            iconColor="#000"
          />
        </div>
      </div>
    );
  }
}

