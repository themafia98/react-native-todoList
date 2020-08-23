import React, { useMemo, useState, useContext } from 'react';
import style from './LoginForm.style';
import { useForm, Controller } from "react-hook-form";
import { Text, Button, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';


const LoginForm = () => {
  const [isRegMode, setRegMode] = useState(false);

  const api = useContext(FirebaseContext);
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = values => {
    const args = Object.values(values);
    if (isRegMode) {
      api.registration(...args);
      return;
    }
    api.login(...args);
  };

  const inputRender = type => ({ onChange, onBlur, value }) => (
    <>
      <Text>{type}</Text>
      <TextInput
        style={[style.inputText,
        errors.email && type === "Email" || errors.password && type === "Password"
          ? style.errorInput
          : null
        ]}
        onBlur={onBlur}
        onChangeText={value => onChange(value)}
        value={value}
      />
    </>
  );

  const onChangeMode = () => {
    setRegMode(state => !state);
  }

  const rules = useMemo(() => ({ required: true }), []);

  return (
    <SafeAreaView>
      <Text style={style.formTitle}>{isRegMode ? "Registration form" : "Login form"}</Text>
      <SafeAreaView style={style.form}>
        <Controller
          control={control}
          render={inputRender("Email")}
          name="email"
          rules={rules}
          defaultValue=""
        />
        {errors.email && <Text style={style.error}>This is required.</Text>}
        <Controller
          control={control}
          render={inputRender("Password")}
          rules={rules}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={style.error}>This is required.</Text>}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <TouchableOpacity onPress={onChangeMode}>
          <Text style={style.modeText} >{isRegMode ? "to login form" : "registration"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
};

export default LoginForm;