import React from 'react'
import styled from 'styled-components'
import Section from './_section';

function Home() {
    return (
        <Contianer>
            < Section 
                title = "Model S"
                description = "Order Online for Touchless Delievery"
                backgroundImg = "model-s.jpg"
                leftbtnText = "Custom Order"
                rightbtnText = "Existing Inventory"

            />
            < Section 
                title = "Model Y"
                description = "Order Online for Touchless Delievery"
                backgroundImg = "model-y.jpg"
                leftbtnText = "Custom Order"
                rightbtnText = "Existing Inventory"
            />
            < Section 
                title = "Model 3"
                description = "Order Online for Touchless Delievery"
                backgroundImg = "model-3.jpg"
                leftbtnText = "Custom Order"
                rightbtnText = "Existing Inventory"
            />
            < Section 
                title = "Model X"
                description = "Order Online for Touchless Delievery"
                backgroundImg = "model-x.jpg"
                leftbtnText = "Custom Order"
                rightbtnText = "Existing Inventory"
            />
            < Section 
                title = "Lowest Cost  Solar Panel in America"
                description = "Money-back guarantee "
                backgroundImg = "solar-panel.jpg"
                leftbtnText = "Order now"
                rightbtnText = "Learn more"
            />
            < Section 
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof"
                backgroundImg = "solar-roof.jpg"
                leftbtnText = "Custom Order"
                rightbtnText = "Existing Inventory"
            />
            < Section 
                title = "Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                leftbtnText = "Shop now"
            />
        </Contianer>
    )
}

export default Home;

const Contianer =  styled.div`
    hieght:100vh;
`
