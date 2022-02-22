import { FC, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { useAppSelector } from 'src/hooks/redux';
import { IForm } from 'src/models/IForms';
import { IStation } from 'src/models/IRailway';
import { DirectionBox } from './FormDirectionStyles';

interface FormDirectionProps {
  direction: string;
  registerDir: 'from' | 'to';
  register: UseFormRegister<IForm>;
  errors: {
    from?: FieldError | undefined;
    to?: FieldError | undefined;
  };
  handleQuery: (id: number, value: string) => void;
}

export const FormDirection: FC<FormDirectionProps> = ({
  direction,
  registerDir,
  register,
  errors,
  handleQuery,
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
    handleQuery(value.station_id, direction);
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

  return (
    <DirectionBox>
      <label htmlFor={direction}>{direction}</label>
      <input
        value={text}
        autoComplete="off"
        type="text"
        id={direction}
        placeholder="Train station"
        {...register(registerDir, { required: true })}
        onChange={(e) => onTextChanged(e.target.value)}
      />
      {errors[`${registerDir}`] && <span>This field is required</span>}
      {renderSuggestions()}
    </DirectionBox>
  );
};
