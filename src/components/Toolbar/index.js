import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Row, Input, Divider, Menu, MenuText, Separator, BottomDivider } from './styles';

import Avatar from '../Avatar';

const Toolbar = () => {
    return (
        <Container>
            <Row>
                <Avatar source="https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4" />
                <Input placeholder="O que você está pensando?" />
            </Row>
            <Divider />
            <Row>
                <Menu>
                    <Ionicons name='ios-videocam' size={22} color='#e44337' />
                    <MenuText>Ao Vivo</MenuText>
                </Menu>

                <Separator />

                <Menu>
                    <MaterialIcons name='photo-size-select-actual' size={20} color='#4CAF50' />
                    <MenuText>Fotos</MenuText>
                </Menu>

                <Separator />

                <Menu>
                    <MaterialCommunityIcons name='video-plus' size={25} color='#E141FC' />
                    <MenuText>Grupos</MenuText>
                </Menu>
            </Row>
            <BottomDivider />
        </Container>
    );
}

export default Toolbar;