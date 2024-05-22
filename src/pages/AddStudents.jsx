import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddStudents = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      surname,
      gender,
      city,
    };

    onSubmit(newStudent);
    return navigate("/")
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={submitHandler}>
        <Container>
          <label htmlFor="name">Name</label>
          <StyledF
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
          />
        </Container>

        <Container>
          <label htmlFor="surname">Surname</label>
          <StyledF
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            id="surname"
          />
        </Container>

        <Container>
          <label htmlFor="gender">Gender</label>
          <StyledSelect
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            name="gender"
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </StyledSelect>
        </Container>

        <Container>
          <label htmlFor="city">City</label>
          <StyledSelect
            onChange={(e) => setCity(e.target.value)}
            value={city}
            name="city"
            id="city"
          >
            <option value="bishkek">Bishkek</option>
            <option value="osh">Osh</option>
          </StyledSelect>
        </Container>

        <Button type="submit">ADD STUDENT</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddStudents;

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

const StyledF = styled.input`
  padding: 5px;
`;

const StyledSelect = styled.select`
  padding: 5px;
`;
