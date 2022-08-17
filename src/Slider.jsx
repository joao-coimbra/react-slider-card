import { useState } from 'react';
import styled from 'styled-components';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Slider({ children, gap, visibleCards, speed }) {

    const [position, setPosition] = useState(0);
    const [disabledPrevious, setDisabledPrevious] = useState(visibleCards >= children.length);
    const [disabledNext, setDisabledNext] = useState(true);

    function previousPosition() {

        setDisabledNext(false)

        if (position > -(children.length - visibleCards)) {
            if (position === -(children.length - visibleCards) + 1) {
                setDisabledPrevious(true)
            } else setDisabledPrevious(false)
            setPosition(position - 1)
        } else {
            setDisabledPrevious(true)
        }
    }

    function nextPosition() {

        setDisabledPrevious(false)

        if (position < 0) {
            if (position === -1) {
                setDisabledNext(true)
            } else setDisabledNext(false)

            setPosition(position + 1)
        } else {
            setDisabledNext(true)
        }
    }

    return (
        <Content className='slider-card'>

            <button
                onClick={nextPosition}
                disabled={disabledNext}
            ><IoIosArrowBack /></button>

            <div>
                <Roll className='roll'
                    gap={gap}
                    v={visibleCards}
                    p={position}

                    speed={speed}
                >
                    {children}
                </Roll>
            </div>

            <button
                onClick={previousPosition}
                disabled={disabledPrevious}
            ><IoIosArrowForward /></button>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    button {
        cursor: pointer;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        height: 40px;
        width: 40px;

        transition: all 300ms;

        &:disabled {
            opacity: .2;
            background-color: transparent !important;
            color: initial !important;
        }

        &:first-child {
            right: calc(100% + 10px);
        }

        &:last-child {
            left: calc(100% + 10px);
        }

        &:hover {
            background-color: #00000010;
        }
    }

    > div {
        width: 100%;
        display: flex;
        height: fit-content;
        align-items: center;

        overflow: hidden;
    }
`

const Roll = styled.div`
    display: flex;
    height: fit-content;
    gap: ${props => props.gap || 0}px;
    width: 100%;

    transition: all ${props => props.speed || 300}ms ease-in-out;

    transform: translateX(calc(${props => `((100% + ${props.gap}px) / ${props.v}) * ${props.p}`}));

    > div {
        min-width: calc(${props => `(100% - (${props.gap || 0}px * (${props.v} - 1)))/${props.v}`});
        max-width: calc(${props => `(100% - (${props.gap || 0}px * (${props.v} - 1)))/${props.v}`});
    }
`

export default Slider;