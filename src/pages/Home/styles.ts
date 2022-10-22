import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
`
export const FilterInput = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 30%;
  margin: 0 auto 30px auto;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 15px;
  text-align: center;
  padding: 0 10px;
`