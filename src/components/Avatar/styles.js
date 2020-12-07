import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 50px;
    height: 50px;  
    margin-right: 5px;
    align-items: center;
    justify-content: center;
`;

export const User = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-color: #1777f2;
    border-width: ${props => (props.story ? "3px" : 0)};
`; 

export const UserActive = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background: #4bcb1f;
    position: absolute;
    bottom: -2px;
    right: 1px;
    border-width: 2px;
    border-color: #fff;
`;

