import styled from 'styled-components';
import { styleVars } from 'src/styles/styleVars';

const { darkGrey, light } = styleVars;

export const AdminRouteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;

  & > button {
    margin: 0;
    margin-top: 10px;
  }

  & > p {
    min-height: 30px;
  }
`;

export const AdminRouteFormFieldset = styled.fieldset`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: calc(50% - 73px);
  margin-bottom: 20px;

  label {
    position: relative;
    width: 100%;
    min-height: 30px;
    padding: 0 5px 0 8px;
    border: 1px solid ${darkGrey};
    background-color: ${light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  input {
    cursor: auto;
  }
`;

export const AdminRouteFormStationBox = styled.div`
  display: flex;
  align-items: center;
`;

export const AdminRouteFormBtnsBox = styled.div`
  margin-left: auto;
  display: flex;
  min-width: 45%;
  justify-content: space-between;
`;
