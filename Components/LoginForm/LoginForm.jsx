import React, { useMemo, useState, useContext } from 'react';
import style from './LoginForm.style';
import { useForm, Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';


const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [msg, setMessage] = useState("");
  const [isRegMode, setRegMode] = useState(false);

  const api = useContext(FirebaseContext);
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = async values => {
    const args = Object.values(values);

    if (!isLoading) setLoading(true);

    if (msg) setMessage("");

    try {
      if (isRegMode) {
        await api.registration(...args);
        setLoading(false);
      }

      await api.login(...args);
    } catch (error) {
      setLoading(false);
      setMessage(error?.message);
    }
  };

  const inputRender = type => ({ onChange, onBlur, value }) => {

    const isEmail = type === "emailAddress";
    const isPassword = type === "password";
    const shouldShowError = errors.email && isEmail || errors.password && isPassword;

    return (
      <>
        {shouldShowError && <Text style={style.error}>This is required.</Text>}
        <TextInput
          textContentType={type}
          autoCompleteType={isEmail ? "email" : "password"}
          secureTextEntry={isPassword}
          placeholder={type}
          style={[style.inputText,
          shouldShowError
            ? style.errorInput
            : null
          ]}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
        />
      </>
    )
  };

  const onChangeMode = () => {
    setRegMode(state => !state);
  }

  const rules = useMemo(() => ({ required: true }), []);

  return (
    <SafeAreaView>
      <Text style={style.formTitle}>{isRegMode ? "Registration form" : "Login form"}</Text>
      {msg ? <Text style={style.error}>{msg}</Text> : null}
      {isLoading ? <ActivityIndicator size="small" /> : null}
      <SafeAreaView style={style.form}>
        <Controller
          control={control}
          render={inputRender("emailAddress")}
          name="email"
          rules={rules}
          defaultValue=""
        />
        <Controller
          control={control}
          render={inputRender("password")}
          rules={rules}
          name="password"
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text style={style.submitButton}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeMode}>
          <Text style={style.modeText} >{isRegMode ? "to login form" : "registration"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
};

export default LoginForm;