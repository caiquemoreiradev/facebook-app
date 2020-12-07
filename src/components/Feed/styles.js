import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;


export const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
`;

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
    margin-right: -100px;
`;

export const UserName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #222121;
`;

export const Time = styled.Text`
    font-size: 9px;
    color: #747476;
`;

export const Post = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
    margin-top: 10px;
`;

export const PostPhoto = styled.Image`
    margin: 10px;
    width: 95%;
    height: 300px;
    border-radius: 10px;
`;

export const Footer = styled.View`
    padding: 0 11px;
    border: 1px solid #f0f2f5;
`;

export const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`;

export const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`;

export const IconCount = styled.View`
    background: ${props => (props.like ? '#1878f3' : props.comment ? '#00BD06' : props.heart ? '#F0100C' : '#fff')};
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`;

export const TextCount = styled.Text`
    font-size: 11px;
    color: #424040;
`;

export const NumberReactions = styled.View`
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.View`
    margin-right: 6px;
`;

export const Text = styled.Text`
    font-size: 12px;
    color: #424040;
`;

export const Separator = styled.View`
    width: 150%;
    margin-left: -20%;
    height: 1px;
    background: #f0f2f5;
`;
