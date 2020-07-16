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

export const Stack = styled.div`
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

export const TileLink = styled.a`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #e6eaef;
    border-radius: 4px;
    text-decoration: none;
    transition: border-color .35s;

    &:hover,
    &:focus {
        border-color: #cfd6e0;
    }

    h2 {
        margin: 0;
        padding: 0;
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