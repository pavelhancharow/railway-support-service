import styled from 'styled-components';

export const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 780px;
  min-height: 113px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 30%);
  margin-top: -1.5rem;

  border: 2px solid #878c96;
  background: #f2f2f2;
  padding: 10px 26px;
  width: 100%;
  z-index: 10;

  h3 {
    margin-bottom: 10px;
  }
`;

export const FormFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
`;
