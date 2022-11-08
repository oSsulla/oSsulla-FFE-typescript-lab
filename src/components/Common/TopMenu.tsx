import { FC } from 'react';
import styled, { css } from 'styled-components';
import { colorStack } from '../style/colorStack';
import { Layout } from './layout';
import { Link } from 'react-router-dom';
import { SomeSpan } from './Components';

const Wrapper = styled.div`
    border: 10px solid ${colorStack.black};
`;

const SecondSpan = styled(SomeSpan)`
    border:3px solid yellow;
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
`;

export const TopMenu: FC = () => {
    return(
        <Wrapper>
        <SecondSpan> Jakiś tam tekst</SecondSpan>
        <ExampleDiv isActive>Jakis div</ExampleDiv>
        <ExampleDiv isActive={false}>Jakis div</ExampleDiv>
        <Link to="posts">Posts</Link>
        <Link to="/">Home</Link>
        </Wrapper>
    )
}

/*
const NewLink = styled(Link)`

`;
*/