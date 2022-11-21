import React from "react";
import "./index.css";
import { useState, useRef, useEffect } from "react";
import InputField from "./InputField";

function LoginForm() {
    const [form, setForm] = useState({ month: "", year: "" });
    const { month, year } = form;
  
    const handleChange = (e: any) => {
      const { maxLength, name, value } = e.target;
  
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
  
      const form = e.target.form;
  
      if (value.length >= maxLength) {
        const index = [...form].indexOf(e.target);
        if (form.elements[index + 1]) {
          form.elements[index + 1].focus();
        }
      }
    };
  
    return (
      <>
        <div>
          <form>
            <InputField
                type="text"
                placeholder="MM"
                value={month}
                name="month"
                length="2"
                onChange={handleChange}
                label="Month" 
                ref={undefined} />
            <InputField
                type="text"
                placeholder="YYYY"
                value={year}
                name="year"
                length="4"
                onChange={handleChange}
                label="Year" 
                ref={undefined}
                />
          </form>
        </div>
        <div>{form.month}</div>
        <div>{form.year}</div>
      </>
    );
  }
  

  export default LoginForm