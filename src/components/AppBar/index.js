import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Text, Button, Row } from './styles';

const AppBar = () => {
  return (
      <Container>
          <Text>facebook</Text>
          <Row>
              <Button>
                  <Feather name='search' color='#000' size={25} />
              </Button>

              <Button>
                  <MaterialCommunityIcons name='facebook-messenger' size={25} />
              </Button>
          </Row>
      </Container>
  );
}

export default AppBar;