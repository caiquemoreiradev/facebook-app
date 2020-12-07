import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    width: 100%;
    height: 58px;
    padding: 25px 15px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Text = styled.Text`
    color: #3a86e9;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -0.3px;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background-color: #eee;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`;
