import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
    margin: 45vh 0;
    text-align: center;
    font-family: sans-serif;
    color: rgba(23, 23, 23, .9);
`;

const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>NextJS with Styled-Components</title>
            </Head>
            <React.Fragment>
                <Title>Initial Template for using Styled-Components in SSR ▲</Title>
            </React.Fragment>
        </React.Fragment>
    );
}

export default Index;