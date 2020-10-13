import React from 'react'
import { Container, Button } from '../../globalStyles'
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading, SubTitle } from './InfoSection.elements'
import {Link} from 'react-router-dom';


const InfoSection = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headLine, lightText, topLine }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
