import React from 'react'
import {ContainerSection,CenterH1,Paragraph,ContainerRow,ContainerCol,CardH3} from './Course.style'
function Course() {
  return (
    <ContainerSection>
        <CenterH1>Course We offer</CenterH1>
      <Paragraph>Lorem ipsum dolor sit amet consectetur.</Paragraph>
      <ContainerRow>
          <ContainerCol>
              <CardH3>Intermediate </CardH3>
              <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit dolore beatae accusantium aspernatur ipsa magni
            incidunt sed illum sunt error.
          </p>
          </ContainerCol>
          <ContainerCol>
            <CardH3>Degree</CardH3>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit dolore beatae accusantium aspernatur ipsa magni
            incidunt sed illum sunt error.
          </p>
          </ContainerCol>
          <ContainerCol>
            <CardH3>Post Graduation</CardH3>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit dolore beatae accusantium aspernatur ipsa magni
            incidunt sed illum sunt error.
          </p>
          </ContainerCol>
      </ContainerRow>

    </ContainerSection>
  )
}

export default Course