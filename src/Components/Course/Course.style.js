import styled from 'styled-components'

export const ContainerSection=styled.section`
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;

`

export const CenterH1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
`

export const Paragraph = styled.p`
  color: #777;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
`
export const ContainerRow = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  
}
`
export const ContainerCol= styled.div`
  flex-basis: 31%;
  background: #fff3f3;
  border-radius: 10px;
  margin-bottom: 5%;
  padding: 20px 12px;
  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
}
`
export const CardH3 = styled.h3`
  text-align: center;
  font-weight: 600;
  margin: 10px 0;
`