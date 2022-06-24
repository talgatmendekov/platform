import React from 'react'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

export const Home = () => {
   return (
      <StyledLayout>
         <Header />
         <Main>
            <LeftContent>
               <H1>WATCH AND EARN</H1>
               <H>EASY MONEY</H>
               <P>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
               </P>
               <ActionDiv>
                  <Button className="btn">Start</Button>
                  <Button className="blackBtn">About it</Button>
               </ActionDiv>
            </LeftContent>
            <RightContent />
         </Main>
         <Footer />
      </StyledLayout>
   )
}

const Main = styled.main`
   display: flex;
   gap: 2rem;
`
const StyledLayout = styled.div`
   width: 100%;
   height: 100vh;
`

const LeftContent = styled.section`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const RightContent = styled.section`
   width: 50%;
   height: 90vh;
   margin-top: -3rem;
   background: #ffca7a;
`
const H1 = styled.h1`
   font-size: 64px;
   color: #a59dff;
`
const H = styled.h1`
   font-size: 64px;
   background: linear-gradient(#a59dff, #dc71fd, #ff7e7e);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`
const P = styled.p`
   width: 82%;
   font-size: 18px;
   color: #bdc1be;
`
const ActionDiv = styled.div`
   display: flex;
   align-self: center;
   gap: 25%;
   padding-top: 46px;
   padding-left: 4rem;
   .blackBtn {
      background: #1d1d1d;
      border: 4px solid #a59dff;
      width: 252px;
      text-align: center;
      height: 50px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 800;
      line-height: 24px;
      color: #deffe1;
   }
   .btn {
      width: 252px;
      text-align: center;
      height: 50px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 800;
      line-height: 24px;
      color: #deffe1;
   }
`
