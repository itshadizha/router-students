import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const EditingStudent = ({ students, onSubmitEdited }) => {

  const { id } = useParams();
  const numericId = Number(id);
  const student = students.find((student) => student._id === numericId);

  const [editName, setEditName] = useState(student ? student.name : "");
  const [editSurname, setEditSurname] = useState(
    student ? student.surname : ""
  );
  const [editGender, setEditGender] = useState(student ? student.gender : "");
  const [editCity, setEditCity] = useState(student ? student.city : "");

  // useEffect(() => {
  //   if (student) {
  //     setEditName(student.name);
  //     setEditSurname(student.surname);
  //     setEditGender(student.gender);
  //     setEditCity(student.city);
  //   }
  // }, [student]);



  const submitEditedHandler = (e) => {
    e.preventDefault();
    const updatedStudent = {
      name: editName,
      surname: editSurname,
      gender: editGender,
      city: editCity,
    };
    onSubmitEdited(updatedStudent);
  };

  if (!student) {
    return <div>Student not found</div>;
  }
  console.log(students)

  return (
    <Wrapper>
      <StyledForm onSubmit={submitEditedHandler}>
        <Container>
          <label htmlFor="name">Name</label>
          <StyledF
            onChange={(e) => setEditName(e.target.value)}
            value={editName}
            type="text"
            id="name"
          />
        </Container>

        <Container>
          <label htmlFor="surname">Surname</label>
          <StyledF
            onChange={(e) => setEditSurname(e.target.value)}
            value={editSurname}
            type="text"
            id="surname"
          />
        </Container>

        <Container>
          <label htmlFor="gender">Gender</label>
          <StyledSelect
            onChange={(e) => setEditGender(e.target.value)}
            value={editGender}
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
            onChange={(e) => setEditCity(e.target.value)}
            value={editCity}
            name="city"
            id="city"
          >
            <option value="bishkek">Bishkek</option>
            <option value="osh">Osh</option>
          </StyledSelect>
        </Container>

        <Button type="submit">EDIT STUDENT</Button>
      </StyledForm>
    </Wrapper>
  );
};

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

export default EditingStudent;
