import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import authApi from "../api/auth";
import { ErrorMessage } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

// haven't implemented Showing an Activity Indicator and Adding an Overlay as it caused 
// errors in useApi updateUrls 

function RegisterScreen() {
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);
    console.log(result.data)
    if(!result.ok) {
      if(result.data) {
        setError(result.data.error);
      }else{
        setError("An unexpected error occured.");
        console.log(result)
      }
      return;
    }
    
    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  
  }


  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
