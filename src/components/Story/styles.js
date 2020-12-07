import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 192px;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding-left: 8px;
`;

export const Stories = styled.ScrollView``;

export const Card = styled.TouchableOpacity`
    width: 106px;
    height: 170px;
    margin-right: 8px;
`;

export const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 12px;
`;

export const CardUser = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #fff;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;

export const CardFooter = styled.View`
    width: 100%;
    position: absolute;
    bottom: 12px;
    left: 9px;
`;

export const Text = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #FFF;
`;

export const Mask = styled.View`
    background: #000;
    opacity: 0.6;
    border-radius: 12px;
`;

export const BottomDivider = styled.View`
    width: 100%;
    height: 5px;
    background: #f0f2f5;
`;

