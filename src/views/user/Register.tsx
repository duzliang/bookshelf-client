import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>用户名：</Text>
      <TextInput
        placeholder="请输入用户名"
        defaultValue={username}
        onChangeText={val => setUsername(val)}
      />
      <Text>密码：</Text>
      <TextInput
        placeholder="请输入密码"
        defaultValue={password}
        onChangeText={val => setPassword(val)}
      />
    </View>
  );
};

export default Register;
