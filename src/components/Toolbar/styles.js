import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Row = styled.View`
    flex-direction: row;
    background-color: #fff;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 100%;
    padding: 0 8px;
`;

export const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background: #f0f0f0;
    margin-top: 5px;
`;

export const Menu = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;
`;

export const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: bold;
    font-size: 12px;
`;

export const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;
`;

export const BottomDivider = styled.View`
    width: 100%;
    height: 1px;
    background: #f0f2f5;
`;
