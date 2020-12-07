import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScrollUsers, Room, Text, User, Row, BottomDivider } from './styles';

import Avatar from '../Avatar';

const Users = () => {
    return (
        <>
            <ScrollUsers
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Row>
                    <Room>
                        <MaterialCommunityIcons name='video-plus' size={26} color='#e141fc' />
                        <Text>Criar Grupo</Text>
                    </Room>

                    <User>
                        <Avatar
                            source='https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93243806_2982808081742702_6507545275064647680_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=mGKqsIOujF8AX-BbaBT&tp=1&oh=d380df97d2218db40e49048851827868&oe=5FF468A2'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4E03AQE7r-g3LGdCJg/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=xHn1gTvI34fJxGonxhNKVoWD2Yo0VSnuAxqFfgEW2D8'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=T1VFNGqfajCnxY1xxIJ7u_QoULKmOMYY_Sy7VGxv7KA'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4E03AQEFVCRAPFpbUA/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=KTBa6fobn3CBsIiGYRkJng-aiR1mSatIePxsJuFQ__E'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4E03AQEGMFb-TXFUEQ/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=AkQf7hYq1oiQLHX8ejOdDDytvBqJKt2wXsZ_t3JDFKg'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4D03AQEil6Xznm-hqw/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=Le91WUm37WckhERNHZG5PJgypBhSTSuNMgTjkhBS4Y0'
                            online
                        />
                    </User>

                    <User>
                        <Avatar
                            source='https://media-exp1.licdn.com/dms/image/C4D03AQGUEsEfoKZNEA/profile-displayphoto-shrink_200_200/0/1540369360282?e=1612396800&v=beta&t=cuKS7fV0j8dDHaMSf5IFjxgM_fTLhCdSBG3OgiYZ_sA'
                            online
                        />
                    </User>
                </Row>
            </ScrollUsers>
        </>
    );
}

export default Users;