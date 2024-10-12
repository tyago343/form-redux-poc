import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormNames, updateFormData, FormData } from "./store/slices/form.slice";

interface FormInput {
  label: string;
  type: string;
  placeholder: string;
  error: string;
  required: boolean;
  name: string;
}

// Create the array of form inputs
const formInputs: FormInput[] = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name",
    error: "Name is required",
    required: true,
    name: "travelers.name",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    error: "Last Name is required",
    required: true,
    name: "travelers.lastName",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Email",
    error: "Email is required",
    required: true,
    name: "travelers.email",
  },
  {
    label: "Phone",
    type: "text",
    placeholder: "Phone",
    error: "Phone is required",
    required: true,
    name: "travelers.phone",
  },
  {
    label: "Country",
    type: "text",
    placeholder: "Country",
    error: "Country is required",
    required: true,
    name: "travelers.country",
  },
  {
    label: "City",
    type: "text",
    placeholder: "City",
    error: "City is required",
    required: true,
    name: "travelers.city",
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Address",
    error: "Address is required",
    required: true,
    name: "travelers.address",
  },
  {
    label: "Postal Code",
    type: "text",
    placeholder: "Postal Code",
    error: "Postal Code is required",
    required: true,
    name: "travelers.postalCode",
  },
  {
    label: "Birthdate",
    type: "date",
    placeholder: "Birthdate",
    error: "Birthdate is required",
    required: true,
    name: "travelers.birthdate",
  },
];

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [k: string]: string }>();
  const dispatch = useDispatch();
  const formValues = watch();

  console.log(formValues);
  useEffect(() => {
    dispatch(
      updateFormData({
        formName: "travelers" as FormNames,
        formValues: formValues.travelers as unknown as FormData,
      })
    );
  }, [formValues, dispatch]);

  const onSubmit = (data: { [k: string]: string }) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs.map((input) => (
          <div key={input.name}>
            <label>{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name, {
                required: input.error,
              })}
            />
            {errors[input.name] && <span>{input.error}</span>}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
