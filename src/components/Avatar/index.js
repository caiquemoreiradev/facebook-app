import React from 'react';
import { View } from 'react-native';

import { Container, User, UserActive } from './styles';

const Avatar = ({ source, online, story }) => {
  return (
    <Container>
        <User source={{ uri: source }} story={story} />
        { online && <UserActive />}
    </Container>
  );
}

export default Avatar;