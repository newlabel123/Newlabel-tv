import styled from '@emotion/styled'
import React from 'react'

function StackedBanner() {
  return (
    <Wrapper>
      <section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label id="slide1" htmlFor="s1">
          1
        </label>
        <label id="slide2" htmlFor="s2">
          2
        </label>
        <label id="slide3" htmlFor="s3">
          3
        </label>
        <label id="slide4" htmlFor="s4">
          4
        </label>
        <label id="slide5" htmlFor="s5">
          5
        </label>
      </section>
    </Wrapper>
  )
}

export { StackedBanner }

const Wrapper = styled.div`
  #slider {
    width: 50%;
    height: 30vh;
    margin: 10px auto 80px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: chocolate;
    position: relative;
    perspective: 1400px;
    transform-style: preserve-3d;
  }

  input[type='radio'] {
    position: relative;
    top: 108%;
    left: 50%;
    width: 18px;
    height: 18px;
    opacity: 0.4;
    margin: 0 15px 0 0;
    transform: translateX(-83px);
    cursor: pointer;
  }

  input[type='radio']:checked {
    opacity: 1;
  }

  input[type='radio']:nth-child(5) {
    margin-right: 0;
  }

  #slider label {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 400ms ease;
  }

  #slide1 {
    background-color: tomato;
  }

  #slide2 {
    background-color: yellowgreen;
  }

  #slide3 {
    background-color: red;
  }

  #slide4 {
    background-color: aquamarine;
  }

  #slide5 {
    background-color: purple;
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10 px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(15%, 0, -100px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(30%, 0, -250px);
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(-30%, 0, -250px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10 px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(-15%, 0, -100px);
  }
`
