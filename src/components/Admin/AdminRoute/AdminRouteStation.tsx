import { FC, useState } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { IStation } from 'src/models/IRailway';
import { DirectionBox } from '../../Form/FormDirection/FormDirectionStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import {
  AdminRouteFormBtnsBox,
  AdminRouteFormStationBox,
} from './AdminRouteStyles';

interface IAdminRouteStation {
  direction: string;
  handleStation: (id: number, value: string) => void;
  handleRemoveStation: () => void;
}

export const AdminRouteStation: FC<IAdminRouteStation> = ({
  direction,
  handleStation,
  handleRemoveStation,
}): JSX.Element => {
  const { stations } = useAppSelector((state) => state.railwayReducer.railway);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState<IStation[]>([]);

  const array = Array.from(stations);

  const onTextChanged = (value: string) => {
    let result: IStation[] = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      result = array
        .sort((a, b) => (a.station > b.station ? 1 : -1))
        .filter((f) => regex.test(f.station));
    }

    setSuggestions([...result]);
    setText(value);
  };

  const suggestionSelected = (value: IStation) => {
    setText(value.station);
    setSuggestions([]);
    handleStation(value.station_id, value.station);
  };

  const renderSuggestions = () => {
    if (!suggestions.length) return null;

    return (
      <ul>
        {suggestions.map((s) => (
          <li onClick={() => suggestionSelected(s)} key={s.station}>
            {s.station}
          </li>
        ))}
      </ul>
    );
  };

  const clearInput = () => setText('');

  return (
    <AdminRouteFormStationBox>
      <DirectionBox>
        <label htmlFor={direction}>find</label>
        <input
          value={text}
          type="text"
          id={direction}
          placeholder="Enter and choose sstation"
          onChange={(e) => onTextChanged(e.target.value)}
        />
        {renderSuggestions()}
      </DirectionBox>
      <AdminRouteFormBtnsBox>
        <MyButton handleClick={clearInput}>Clear Input</MyButton>
        <MyButton handleClick={handleRemoveStation}>Remove Last</MyButton>
      </AdminRouteFormBtnsBox>
    </AdminRouteFormStationBox>
  );
};
