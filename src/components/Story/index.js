import React, { useState } from 'react';

import { Container, Stories, Card, CardStory, CardUser, CardFooter, Text, Mask, BottomDivider } from './styles';

import { AntDesign } from '@expo/vector-icons';

import Avatar from '../Avatar';

const Story = () => {

    const [userStory, setUserStory] = useState([
        {
            userProfile: 'https://lthumb.lisimg.com/952/19411952.jpg?width=280&sharpen=true',
            userStory: 'https://image.tmdb.org/t/p/w220_and_h330_face/9AFA8MtGLqcEyHlJv2tMMovLaQH.jpg',
            userName: 'Erin Moriarty'
        },
        {
            userProfile: 'https://br.web.img2.acsta.net/pictures/17/02/08/16/50/452749.jpg',
            userStory: 'https://image.tmdb.org/t/p/original/ukvc9hCAJGa5NdX1omz3pMBkomr.jpg',
            userName: 'Will Smith'
        },
        {
            userProfile: 'https://i2.wp.com/cloud.estacaonerd.com/wp-content/uploads/2018/07/26111523/ryan.jpeg?fit=1000%2C750&ssl=1',
            userStory: 'https://image.tmdb.org/t/p/original/es15DC7iwrxvHBgkgH2d5cBk02J.jpg',
            userName: 'Ryan Reynolds'
        },
        {
            userProfile: 'https://image.tmdb.org/t/p/w220_and_h330_face/wyeXzGUR267sxH1rVQf4Ll7h26N.jpg',
            userStory: 'https://image.tmdb.org/t/p/original/v4FHdJCRg94cOKX9hwKU9aTad7k.jpg',
            userName: 'Anne Hathaway'
        },
        {
            userProfile: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/k4Oimp5juy6qHPtFWUFpgEX4Sln.jpg',
            userStory: 'https://image.tmdb.org/t/p/original/oRHJKLrD94J84qYbgWKMRJoNNNF.jpg',
            userName: 'Tom Holland'
        },
        {
            userProfile: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/aDWrs64fKhIyqeIMPTAlK4UlDbZ.jpg',
            userStory: 'https://image.tmdb.org/t/p/w220_and_h330_face/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg',
            userName: 'Gal Gadot'
        },
        {
            userProfile: 'https://image.tmdb.org/t/p/original/nVznarxjPgR2JtMUBNl7TRxqTqH.jpg',
            userStory: 'https://image.tmdb.org/t/p/original/metGjdkfCFMrgPniUHLiuyfMDhY.jpg',
            userName: 'Alexandra Daddario'
        }
    ]);

    return (
        <>
            <Container>
                <Stories
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Card>
                        <Mask>
                            <CardStory source={{ uri: 'https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4' }} />
                        </Mask>
                        <CardUser>
                            <AntDesign name='plus' size={24} color='#1777f2' />
                        </CardUser>
                        <CardFooter>
                            <Text>Adicionar Story</Text>
                        </CardFooter>
                    </Card>

                    {userStory.map(story => (
                        <Card>
                            <Mask>
                                <CardStory source={{ uri: story.userStory }} />
                            </Mask>
                            <CardUser>
                                <Avatar story source={story.userProfile} />
                            </CardUser>
                            <CardFooter>
                                <Text>{story.userName}</Text>
                            </CardFooter>
                        </Card>
                    ))}
                </Stories>
            </Container>
            <BottomDivider />
        </>
    );
}

export default Story;