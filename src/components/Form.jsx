import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import { useEffect } from 'react';

const Form = ({onSubmit, initialValues, onSubmitEdited}) => {
}

export default Form

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 20px;
  color: #fff;
  background-color: #551455;
  margin: 100px auto;
  width: 400px;
  height: 500px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: yellow;
  border: none;
  border-radius: 8px;
`;

const StyledInput = styled.input`
    padding: 5px;
`
const StyledSelect = styled.select`
    padding: 5px `
