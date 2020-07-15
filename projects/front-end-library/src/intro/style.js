import { styled } from '@storybook/theming'

export const ImageBackground = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 500px;
    width: 65vw;
    z-index: 0;
    pointer-events: none;
`;

export const TileLink = styled.a`
    display: flex;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #e6eaef;
    border-radius: 4px;
    transition: border-color .35s;

    &:hover,
    &:focus {
        border-color: #cfd6e0;
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