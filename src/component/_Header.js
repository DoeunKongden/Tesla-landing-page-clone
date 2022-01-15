import React, { useState } from 'react'
import styled  from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Close from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';
import {selectCars} from "../features/Car/CarSlice";
import { useSelector } from 'react-redux';

function _Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars= useSelector(selectCars);
    return (
        <Container>
            <a>
                <img src='../../Tesla Clone LIVE/images/logo.svg'></img>
            </a>

            <Menu>  

                {cars && cars.map((cars, index)=>(
                        <a key={index} href="#">{cars}</a> 
                ))}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() =>setBurgerStatus(true) }/>
            </RightMenu>

             <BurgerNav show= {burgerStatus}>
                 <CloseWrapper>
                    <CustomClose onClick={() =>setBurgerStatus(false)} />
                 </CloseWrapper>

                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav> 
        </Container>
    )
}

export default _Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }

    a{
        font-weight: 600;
        text-transform: uppercase; 
        padding: 0px 10px;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase; 
        padding: 0px 10px;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 30px;
    display: flex;
    flex-direction:  column;
    text-align: start;
    transform: ${props => props.show? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.3s ;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }

`

const CustomClose = styled(Close)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`



