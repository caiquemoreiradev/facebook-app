import React, { useState } from 'react';

import { Container, Header, Row, UserName, Time, Post, PostPhoto, Footer, FooterCount, IconCount, TextCount, NumberReactions, Separator, FooterMenu, Button, Icon, Text } from './styles';

import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';
import { View } from 'react-native';

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            userName: 'Disney+',
            userImage: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=s180-rw',
            time: '9 minutos atrás',
            postDescription: 'The Mandalorian conta a saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço, logo após a queda do Império e antes da criação da temida Primeira Ordem.',
            postImage: 'https://image.tmdb.org/t/p/original/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg',
            numberReactions: '12056',
            numberComments: '458'
        },
        {
            userName: 'Disney+',
            userImage: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=s180-rw',
            time: '15 horas atrás',
            postDescription: 'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes.',
            postImage: 'https://image.tmdb.org/t/p/original/aPSX29AIwAuP54cwrigmxSnPnhn.jpg',
            numberReactions: '48876',
            numberComments: '212451'
        }
    ]);

    return (
        <>
            {posts.map(post => (
                <Container key={post.postImage}>
                    <Header>
                        <Row>
                            <Avatar source={post.userImage} />
                            <View style={{ paddingLeft: 6 }}>
                                <UserName>{post.userName}</UserName>
                                <Row>
                                    <Time>{post.time}</Time>
                                    <Entypo name='dot-single' size={12} color='#747476' />
                                    <Entypo name='globe' size={10} color='#747476' />
                                </Row>
                            </View>
                        </Row>

                        <Entypo name='dots-three-horizontal' size={15} color='#747476' />
                    </Header>

                    <Post numberOfLines={3}>
                        {post.postDescription}
                    </Post>

                    <PostPhoto source={{ uri: post.postImage }} />

                    <Footer>
                        <FooterCount>
                            <Row>
                                <IconCount like style={{ position: "absolute", left: 25 }}>
                                    <AntDesign name='like1' size={12} color='#fff' />
                                </IconCount>
                                <IconCount comment style={{ position: "absolute", left: 15 }}>
                                    <MaterialCommunityIcons name='comment' size={12} color='#fff' />
                                </IconCount>
                                <IconCount heart style={{ position: "absolute", left: 5 }}>
                                    <AntDesign name='heart' size={12} color='#fff' />
                                </IconCount>
                            </Row>
                            <NumberReactions>
                                <TextCount>{post.numberReactions}</TextCount>
                            </NumberReactions>
                            <TextCount>{post.numberComments} comentários</TextCount>
                        </FooterCount>

                        <Separator />

                        <FooterMenu>
                            <Button>
                                <Icon>
                                    <AntDesign name='like2' size={20} color='#424040' />
                                </Icon>
                                <Text>Like</Text>
                            </Button>

                            <Button>
                                <Icon>
                                    <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                                </Icon>
                                <Text>Comentar</Text>
                            </Button>

                            <Button>
                                <Icon>
                                    <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                                </Icon>
                                <Text>Compartilhar</Text>
                            </Button>
                        </FooterMenu>
                    </Footer>

                    <Separator />
                </Container>
            ))}
        </>
    );
}

export default Feed;