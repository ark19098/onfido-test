import React, {useState} from 'react';
import { Form, Button, Field, FieldLabel, Asterisk, Input, Validation, Select, Option, HelperText, Radio, 
        Checkbox, Fieldset, FieldsetLegend} from '@onfido/castor-react';


const MyForm = () => {

    const [firstName, setFirstName] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        console.log(firstName)
    }

    return (
      <div>
        <Form>
  <Field>
    <FieldLabel htmlFor="first-name">
      <span>
        First name
        <Asterisk />
      </span>
      <Input
        autoComplete="given-name"
        id="first-name"
        onChange={handleFirstName}
        name="firstName"
        value={firstName}
        required
      />
    </FieldLabel>
    <Validation
      if="valueMissing"
      state="error"
    >
      Please fill in this field
    </Validation>
  </Field>
  <Field>
    <FieldLabel htmlFor="last-name">
      <span>
        Last name
        <Asterisk />
      </span>
      <Input
        autoComplete="family-name"
        id="last-name"
        name="lastName"
        required
      />
    </FieldLabel>
    <Validation
      if="valueMissing"
      state="error"
    >
      Please fill in this field
    </Validation>
  </Field>
  <Field>
    <FieldLabel htmlFor="email">
      <span>
        Email address
        <Asterisk />
      </span>
      <Input
        autoComplete="email"
        id="email"
        name="email"
        required
        type="email"
      />
    </FieldLabel>
    <Validation
      if="valueMissing"
      state="error"
    >
      Please fill in this field
    </Validation>
    <Validation
      if="typeMismatch"
      state="error"
    >
      Please enter a valid email address
    </Validation>
  </Field>
  <Field>
    <FieldLabel htmlFor="gender">
      <span>
        Gender
        <Asterisk />
      </span>
      <Select
        id="gender"
        name="gender"
        required
      >
        <Option disabled>
          Select an option...
        </Option>
        <Option value="m">
          Male
        </Option>
        <Option value="f">
          Female
        </Option>
        <Option value="n-b">
          Non-binary
        </Option>
        <Option value="n/a">
          Prefer not to answer
        </Option>
      </Select>
    </FieldLabel>
    <Validation
      if="valueMissing"
      state="error"
    >
      Please select an option for this field
    </Validation>
  </Field>
  <Field>
    <FieldLabel htmlFor="dob-day">
      Date of birth
      <HelperText>
        DD / MM / YYYY
      </HelperText>
    </FieldLabel>
    <div
      style={{
        display: 'grid',
        gap: '0.5rem',
        grid: '1fr / 5rem 5rem 6rem'
      }}
    >
      <Input
        id="dob-day"
        max={31}
        min={1}
        name="day"
        placeholder="DD"
        type="number"
      />
      <Input
        max={12}
        min={1}
        name="month"
        placeholder="MM"
        type="number"
      />
      <Input
        max={2022}
        min={1872}
        name="year"
        placeholder="YYYY"
        type="number"
      />
    </div>
  </Field>
  <Fieldset
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <FieldsetLegend>
      How did you hear about us?
    </FieldsetLegend>
    <Radio
      name="source"
      value="social-media"
    >
      Social media
      <HelperText>
        Facebook, Twitter, TikTok, etc...
      </HelperText>
    </Radio>
    <Radio
      name="source"
      value="search-engine"
    >
      Search engine
    </Radio>
    <Radio
      name="source"
      value="word-of-mouth"
    >
      Word of mouth
    </Radio>
    <Radio
      name="source"
      value="other"
    >
      Other...
    </Radio>
  </Fieldset>
  <Field>
    <Checkbox
      name="agreement"
      required
    >
      I agree to the
      <a
        href="https://github.com/onfido/castor"
        style={{
          pointerEvents: 'auto'
        }}
      >
        Privacy policy
      </a>
      and
      <a
        href="https://github.com/onfido/castor"
        style={{
          pointerEvents: 'auto'
        }}
      >
        Terms and conditions
      </a>
      .
    </Checkbox>
    <Validation
      if="valueMissing"
      state="error"
    >
      Please confirm you agree
    </Validation>
  </Field>
  <Button>
    Send email
  </Button>
</Form>
      </div>
    );
}

export default MyForm;
