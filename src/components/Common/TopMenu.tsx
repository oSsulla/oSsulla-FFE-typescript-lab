import { FC } from 'react';
import styled, { css } from 'styled-components';
import { colorStack } from '../style/colorStack';
import { Layout } from './layout';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    border: 10px solid ${colorStack.black};
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
`;

export const TopMenu: FC = () => {
    return (
        <Wrapper>

        </Wrapper>
    );
}

/*
const NewLink = styled(Link)`

`;
*/