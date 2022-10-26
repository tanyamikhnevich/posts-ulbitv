import React from "react";
import {FilterI} from "../../../pages/posts";

interface Props {
  defaultValue: string;
  options: Option[];
  value?: string;
  onChange: (sort: FilterI['sort']) => void;
}

interface Option {
  value: string;
  name: string;
}

export const MySelect = ({ options, defaultValue, value, onChange }: Props) => {
  return (
    <select
    value={value}
    onChange={event => onChange(event.target.value as FilterI['sort'])}>
      <option value="value1" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
