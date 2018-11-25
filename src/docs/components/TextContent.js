import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 29px;
    color: #cbcbcb;
    font-weight: 900;
`;

const Cont = styled.div`
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    line-height: 28px;
    margin-bottom: 41px;
    -webkit-letter-spacing: 0.3px;
    -moz-letter-spacing: 0.3px;
    -ms-letter-spacing: 0.3px;
    letter-spacing: 0.3px;
    font-weight: 600;
    color: rgb(255, 163, 163);
    margin-top: 20px;
`;

const Code = styled.code`
    border-radius: 4px;
    padding: 10px;
    background: #414562;
    color: #909090;
    font-size: 12px;
    font-family: 'Poppins',sans-serif;
    -webkit-letter-spacing: 0.6px;
    -moz-letter-spacing: 0.6px;
    -ms-letter-spacing: 0.6px;
    letter-spacing: 0.6px;
    word-spacing: 4px;
`;

const Usage = styled.button`
    background-color: rgb(255, 113, 113);
    border: none;
    border-radius: 4px;
    padding: 12px 15px;
    -webkit-transition: 0.125s;
    -o-transition: 0.125s;
    -webkit-transition: 0.125s;
    transition: 0.125s;
    color: #f1f1f1;
    font-size: 13px;
    font-weight: 600;
    -webkit-letter-spacing: 0.35px;
    -moz-letter-spacing: 0.35px;
    -ms-letter-spacing: 0.35px;
    letter-spacing: 0.35px;
    display: inline-block;
    margin-top: 43px;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
`;

const TextContent = ()=>{
    return(
        <React.Fragment>
            <Title>React Video Pop</Title>
            <Cont>
                Floating video component made in react , which is draggable across any coordinate of the screen and resizable too. The working is inspired from the MacOS picture to picture feature.
            </Cont>
            <Code>
                npm install --save react-video-pop
            </Code>
            <div>
                <a href='https://github.com/pizza3/react-video-pop#react-video-pop'><Usage>Documentation</Usage> </a>               
            </div>
        </React.Fragment>
    );
};


export default TextContent;