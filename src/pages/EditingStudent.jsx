import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const EditingStudent = ({ getStudentById, onSubmitEdited }) => {
  const navigate = useNavigate()
  const { id } = useParams();

  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editCity, setEditCity] = useState("");
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const studentData = await getStudentById(id);
      setStudent(studentData);
      setEditName(studentData.name);
      setEditSurname(studentData.surname);
      setEditGender(studentData.gender);
      setEditCity(studentData.city);
    };

    fetchStudent();
  }, [id, getStudentById]);

  const submitEditedHandler = (e) => {
    e.preventDefault();
    const updatedStudent = {
      id,
      name: editName,
      surname: editSurname,
      gender: editGender,
      city: editCity,
    };
    onSubmitEdited(id, updatedStudent);
    navigate("/")
  };

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <Wrapper>
      <StyledForm onSubmit={submitEditedHandler}>
        <Container>
          <label htmlFor="name">Name</label>
          <StyledInput
            onChange={(e) => setEditName(e.target.value)}
            value={editName}
            type="text"
            id="name"
          />
        </Container>

        <Container>
          <label htmlFor="surname">Surname</label>
          <StyledInput
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
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 5px;
`;

const StyledSelect = styled.select`
  padding: 5px;
`;

export default EditingStudent;
