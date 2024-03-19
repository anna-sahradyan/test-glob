import styled, {css} from 'styled-components';

const CustomFontColor = css`
    color: rgb(38, 44, 64);
`;

const FontStyleSpan = css`
    color: rgb(129, 137, 163);
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
`;

const FlexStart = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    align-content: center;
`;
export const Wrapper = styled.div`
    width: 100%;
    margin-top: 40px;
    min-height: 100dvh;
`;
export const LoadingItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5); 
    z-index: 999;

`;

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    min-height: 100vh;
    height: 100%;
`;
export const UsersContainer = styled.div`
    width: 100%;
    min-height: 100dvh;
    margin-top: 32px;
    display: grid;
    grid-column-gap: 3px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(3, minmax(375px, 1fr));
`;
/*Modal Part*/
export const ModalBox = styled.div`
    width: 100%;
    height: 100%;
    


`;
export const TitleBox = styled(FlexStart)`
    margin-right: 40px;
    width: auto;
    height: 30px;
   

`;
export const Title = styled.h1`
    ${CustomFontColor};
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;


`;

export const Inner = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;

`;
export const Div = styled.div`

    display: flex;
`;
export const TextSpan = styled.span`
    width: 200px;
    display: inline-block;
    margin: 0 0 14px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(38, 44, 64);

`;
export const DescSpan = styled.span`
    width: 60%;
    display: inline-block;
    margin: 0 0 14px 40px;
    color: rgb(129, 137, 163);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;


`;
export const DescSpanInfo = styled.span`
    display: inline-block;
    margin: 0 0 14px 40px;
    height: 50px;
    width: 60%;
    ${FontStyleSpan}



`;
export const TitleDesc = styled.p`
    margin-top: 40px;
    width: 400px;
    height: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(38, 44, 64);

`;
export const Description = styled.div`
    margin-top: 12px;
    width: 100%;
    height: 54px;
    ${FontStyleSpan}

`;
export const Department = styled.div`
    display: flex;
    overflow-wrap: break-word;

`;