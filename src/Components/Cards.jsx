import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CloseIcon from '@mui/icons-material/Close';

function Cards({ title, category, likes, dislikes, imageProfile, imageBanner, ReleaseDate }) {

    const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true)
    }

    const hiddenModal = () => {
        setShowModal(false)
    }

    const cut = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    useEffect(() => {
        if(showModal){
            document.body.style.overflow = 'hidden';
        }
        return () =>
            document.body.style.overflow = 'unset';
     }, [showModal]);

  return (
    <>
        <Card onClick={displayModal} style={{backgroundImage: `url(${imageProfile})`}}> 
            <CardClose />
            <CardTitle>{cut(`${title}`,15)}</CardTitle>
            <CardCategorie>{cut(`${category}`,25)}</CardCategorie>
                <CardGauge>
                <Like />{likes}
                <Gauge />{dislikes}
                <Dislike />
                <CheckBoxWrapper>
                    <CheckBox id="checkbox" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
            </CardGauge>
        </Card>

        {showModal && 
            <BackgroundModalCard>
                <ModalCardContent style={{backgroundImage: `url(${imageBanner})`}}>
                        <CloseButtonContent>
                            <CloseButton onClick={hiddenModal} />
                        </CloseButtonContent>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalReleaseDate>{`(${ReleaseDate})`}</ModalReleaseDate>
                        <ModalCategory>{category}</ModalCategory>
                        <ModalVotes>
                            <Like />{likes}
                            <Dislike style={{ marginLeft: "0.5em" }}/>{dislikes}
                        </ModalVotes>
                </ModalCardContent>
            </BackgroundModalCard>
        }
    </>
  )
}

export default Cards

const Card = styled.div`
    color: #fff;
    background-repeat: no-repeat;
    object-fit: contain;
    background-position: center;
    background-size: cover;
    width: 15em;
    height: 20em;
    border-radius: 5px;
    margin: 1em 1em 1em 1em;
    cursor: pointer;
    padding: 5px;
    position: relative;
    transition: 0.3s;
    &:hover{
        transform: scale(1.05);
    }
`

const CardTitle = styled.div`
    color: #fff;
    font-weight: 600;
    font-size: 30px;
    position: absolute;
    bottom: 0;
    line-height: 5.5;
`

const CardCategorie = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0;
    line-height: 5;
    font-size: 20px;
`

const CardGauge = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    padding-bottom: 5px;
`

const Like = styled(ThumbUpOffAltIcon)`

`

const Dislike = styled(ThumbDownOffAltIcon)`

`

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 0.5em;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 30px;
  border-radius: 15px;
  background: red;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 3px 0 0 2px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 52px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: blue;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: -15px;
      font-size: 40px;
      transition: 0.2s;}
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-left: 25px;
      transition: 0.2s;
    }
  }
`

const Gauge = styled.div`
    width: 3em;
    height: 3px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
`

const CardClose = styled(CloseIcon)`
    font-size: 20px;
    color: #fff;
    right: 0;
    position: absolute;
    margin-right: 5px;
    &:hover{
        transform: scale(1.2);
    }
`

const BackgroundModalCard = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`

const ModalCardContent = styled.div`
    color: #fff;
    border-radius: 8px;
    background-repeat: no-repeat;
    object-fit: contain;
    background-position: center;
    background-size: cover;
    max-width: 40em;
    width: 40em;
    height: 22em;
    margin: 0 10px 0 10px;
    position: relative;
`

const CloseButtonContent = styled.div`
    display: flex;
    justify-content: right;
    border-radius: 8px;
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    padding: 7px;
    margin: 5px;
    border-radius: 5px;
    :hover{
        background-color: rgba(255,255,255,0.1);
        transition: 0.3s;
        box-shadow: 0px 0px 15px 5px #000;
    }
`

const ModalTitle = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    line-height: 9.8em;
`

const ModalReleaseDate = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    line-height: 7.1em;
`

const ModalCategory = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    line-height: 4.5em;
`

const ModalVotes = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    line-height: 2em;
`
