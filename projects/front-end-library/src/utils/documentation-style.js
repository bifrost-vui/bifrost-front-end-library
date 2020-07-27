import { styled, css } from '@storybook/theming'

export const ImageBackground = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 500px;
    width: 65vw;
    z-index: 0;
    pointer-events: none;
`;

export const StackIntrodution = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: block;
    }

    > * {
        flex: 1 50%;

        &:first-of-type {
            margin-right: 1rem;

            @media (max-width: 768px) {
                margin-right: 0;
            }
        }
    }
`;

export const TileLink = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid #e6eaef;
    border-radius: 4px;
    text-decoration: none;
    transition: border-color .35s;
    cursor: pointer;

    &:hover,
    &:focus {
        border-color: #cfd6e0;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 1.75rem;
        border: none;
        cursor: inherit;
    }

    img {
        max-width: 3rem;
        max-height: 3rem;
        margin-right: 1rem;
    }
`

export const Image = styled.img`
    max-width: 4rem;
    max-height: 4rem;
`

export const Stack = styled.div`
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.button`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 12rem;
    padding: .5rem 1rem;
    font-size: 1rem;
    background: #f5f7fb;
    border: 1px solid #e6eaef;
    border-radius: 4px;
    text-decoration: none;
    transition: border-color .35s;
    overflow: hidden;
    cursor: pointer;
    
    &:hover,
    &:focus {
        border-color: #cfd6e0;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: .75rem;
        right: .75rem;
        width: .6rem;
        height: .6rem;
        border-radius: 50%;

        ${props => props.status === 'complete' && css`
            background: green!important;
            box-shadow: 0 0 2px green;
        `}

        ${props => props.status === 'pending' && css`
            background: orange!important;
            box-shadow: 0 0 2px orange;
        `}
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 1rem);
        border: 0;
        pointer-events: none;
    }
    
`